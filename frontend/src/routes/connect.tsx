import { createFileRoute } from '@tanstack/react-router'
import { createClient } from "@connectrpc/connect";
import { createConnectTransport } from "@connectrpc/connect-web";

// The transport defines what type of endpoint we're hitting.
// In our example we'll be communicating with a Connect endpoint.
const transport = createConnectTransport({
  baseUrl: "https://demo.connectrpc.com",
});

// Here we make the client itself, combining the service
// definition with the transport.
//const client = createClient(ElizaService, transport);

export const Route = createFileRoute('/connect')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/connect"!</div>
}
