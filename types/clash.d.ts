interface Proxie {
  name: string,
  type: string,
  server: string,
  port: string,
  cipher: string,
  password: string,
  protocol: string,
  "protocol-param": string,
  obfs: string,
  "obfs-param": string,
  udp?: boolean,
  tfo?: boolean,
  mptcp?: boolean
}