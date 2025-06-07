export const onRequest: PagesFunction<Env> = async (ctx) => {
  const { env, request } = ctx;

  const urlParams = new URL(request.url).searchParams;
  const secret = urlParams.get("secret");

  if (!env.CLASH_GW_SECRET || env.CLASH_GW_SECRET !== secret) {
    return new Response(null, {
      status: 204
    });
  }

  const response = await (await fetch("https://ruleset.skk.moe/Clash/ip/china_ip.txt")).text();

  const result = [
    "/ip/firewall/address-list",
    "remove [find where list=cn-ip-list]"
  ];

  for (const line of response.split("\n")) {
    if (line.startsWith("#") || !line.trim()) continue;
    result.push(`add list=cn-ip-list address=${line.trim()}`);
  }

  return new Response(result.join("\n"));
};