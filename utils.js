




export async function fetchScore() {
  const response = await fetch("http://localhost:6003/api/score");
  const data = await response.json();

  return data;
}

export async function handleSubmit(userName, userScore) {
  const scoreData = { name: userName, score: userScore };
  try {
    const response = await fetch("http://localhost:6003/api/score", {
      method: "POST",
      body: JSON.stringify(scoreData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
    }
  } catch (err) {
    console.log(err);
  }
}
