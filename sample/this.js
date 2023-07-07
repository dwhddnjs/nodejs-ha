console.log("전역스코프 빈객체", this);

function func() {
  console.log("window", this);
}

func();
