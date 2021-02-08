(() => {
  const calcIdealDaysSum = () => {
    let sum = 0;
    document.querySelectorAll('[title^="Ideal days: "]').forEach((x) => {
      sum += +x.innerHTML || 0;
    });
    return sum;
  };

  alert(`Ideal days total: ${calcIdealDaysSum()}`);
})();
