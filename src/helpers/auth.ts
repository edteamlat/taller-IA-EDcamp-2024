const API_URL = process.env.NEXT_PUBLIC_API_URL

async function loginUser(username: string, password: string) {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })

    if (!response.ok) {
      throw new Error("Login failed")
    }

    const data = await response.json()
    const token = data.token

    localStorage.setItem("authToken", token)

    return token
  } catch (error) {
    console.error("Login error:", error)
    throw error
  }
}

export { loginUser }
