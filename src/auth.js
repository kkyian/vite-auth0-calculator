import { createAuth0Client } from '@auth0/auth0-spa-js'; 

let auth0 = null;

export async function initAuth() {
  auth0 = await createAuth0Client({
    domain: import.meta.env.VITE_AUTH0_DOMAIN,
    clientId: import.meta.env.VITE_AUTH0_CLIENT_ID,
    authorizationParams: {
      redirect_uri: window.location.origin,
    },
  });

  if (window.location.search.includes("code=") && window.location.search.includes("state=")) {
    await auth0.handleRedirectCallback();
    window.history.replaceState({}, document.title, "/");
  }

  return auth0;
}

export async function login() {
  if (!auth0) await initAuth();
  return auth0.loginWithRedirect({ authorizationParams: { connection: "google-oauth2" } });
}

export async function logout() {
  if (!auth0) await initAuth();
  return auth0.logout({ logoutParams: { returnTo: window.location.origin } });
}

export async function getUser() {
  if (!auth0) await initAuth();
  const isAuthenticated = await auth0.isAuthenticated();
  return isAuthenticated ? await auth0.getUser() : null;
}
