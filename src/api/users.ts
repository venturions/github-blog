export async function fetchUserData() {
  try {
    const response = await fetch("https://api.github.com/users/venturions", {
      cache: "no-store",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    return null;
  }
}
