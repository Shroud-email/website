export default () => {
  onMounted(() => {
    if (!process.client) return

    (window as any).Papercups = {
      config: {
        token: "81a13d1b-a34a-487e-965e-8779ddd855f1",
        inbox: "f01194cc-2fa5-4be5-b2e1-54f42b1fc773",
        title: "Welcome to Shroud.email",
        subtitle: "Ask us anything in the chat window below 😊",
        primaryColor: "#4f46e5",
        newMessagePlaceholder: "Start typing...",
        showAgentAvailability: false,
        agentAvailableText: "We're online right now!",
        agentUnavailableText: "We're away at the moment.",
        requireEmailUpfront: true,
        iconVariant: "outlined",
        baseUrl: "https://app.papercups.io"
      },
    }

    const script = document.createElement("script")
    script.src = "https://app.papercups.io/widget.js"
    script.type = "text/javascript"
    script.defer = true
    script.async = true
    document.head.appendChild(script)
  })
}
