

export const reportSubScriptionClient = async (_url: string, reportAuthKey: string, detail: Record<any, any>) => {
  try {
    const url = new URL(_url);
    fetch(url.href, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${reportAuthKey}`,
      },
      body: JSON.stringify({
        "from": "clash-gateway",
        "event": "subscription-report",
        "data": detail
      }),
    });
  } catch { }
}