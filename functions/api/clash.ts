import base from "../../templates/base";
import dns from "../../templates/dns";
import tun from "../../templates/tun";
import { ruleProviders, rules } from "../../templates/rules";
import { proxyGroups } from "../../templates/proxy-groups";

import yaml from "js-yaml";
import { addPropertyToProxies } from "../../utils/proxies";


export const onRequest: PagesFunction<Env> = async ({ request, env }) => {

  const urlParams = new URL(request.url).searchParams;
  const secret = urlParams.get("secret");
  const autoRoute = urlParams.get("auto-route") === "1";
  const ipv6Dns = urlParams.get("ipv6-dns") === "1";

  if (!env.CLASH_GW_SECRET || env.CLASH_GW_SECRET !== secret) {
    return new Response(null, {
      status: 204
    });
  }

  base.secret = env.CLASH_API_SECRET;

  const response = await fetch(env.CLASH_PROVIDER);
  const subscriptionUserInfo = response.headers.get("subscription-userinfo");

  const clashRemoteConfig = await response.text();

  const subscribe = yaml.load(clashRemoteConfig) as any;

  const proxies = addPropertyToProxies(subscribe.proxies as Proxie[], {
    udp: true,
    tfo: true,
    mptcp: true
  });

  const fullClashConfig = {
    ...base,
    dns: {
      ...dns,
      "ipv6": ipv6Dns
    },
    tun: {
      ...tun,
      "auto-route": autoRoute
    },
    proxies,
    "rule-providers": ruleProviders,
    "proxy-groups": proxyGroups,
    rules,
  };

  const yamlClashConfig = yaml.dump(fullClashConfig).replace(/'''/g, "'");

  const headers = new Headers();

  headers.set("Content-Type", "text/plain; charset=UTF-8");

  if (subscriptionUserInfo) {
    headers.set("subscription-userinfo", subscriptionUserInfo);
  }

  return new Response(yamlClashConfig, {
    headers
  });
}