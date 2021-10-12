function goTab(i) {
  const tabNavList = document.getElementsByClassName("tabNav");
  if (tabNavList[i].classList.contains("selected")) return;

  [...tabNavList].forEach((ele, idx) =>
    i === idx ? ele.classList.add("selected") : ele.classList.remove("selected")
  );

  const tabList = document.getElementsByClassName("tab");
  [...tabList].forEach((ele, idx) =>
    i === idx ? ele.classList.add("selected") : ele.classList.remove("selected")
  );
}
