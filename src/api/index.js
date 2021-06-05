import axios from "axios";
import React from "react";

const BASE_URL = "https://fitnesstrac-kr.herokuapp.com";

export async function registerUser(username, password) {
  const url = `${BASE_URL}/api/users/register`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    const data = response.json();

    return data;
  } catch (error) {
    throw error;
  }
}
