export default () => {
  onMounted(() => {
    if (!process.client) return

    const script = document.createElement("script")
    script.src =
      "https://plaus-prox.btao.workers.dev/pjs/script.outbound-links.js"
    script["data-api"] = "https://plaus-prox.btao.workers.dev/api/event"
    script["data-domain"] = "shroud.email"
    script.defer = true
    document.head.appendChild(script)
  })
}
