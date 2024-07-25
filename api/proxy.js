export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    url.hostname = '128.204.223.70:17667'; // Use 'hostname' instead of 'host'

    // Create a new request with the modified URL
    const newRequest = new Request(url.toString(), {
      method: request.method,
      headers: request.headers,
      body: request.body,
      redirect: 'follow'
    });

    // Forward the new request
    const response = await fetch(newRequest);
    return response;
  }
}
