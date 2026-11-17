// تطبع أكبر قيمة عددية مخزنة في مصفوفة معينة
function printMaxValue(arr) {
  // نتأكد أول إنها مصفوفة فعلاً وما هي فاضية
  if (!Array.isArray(arr) || arr.length === 0) {
    console.log("المصفوفة فاضية أو غير صالحة");
    return;
  }

  // ناخذ بس القيم العددية (نتجاهل النصوص أو أي شي مو رقم)
  // عشان نضمن إن النتيجة فعلاً أكبر "قيمة عددية"
  const numbers = arr.filter((item) => typeof item === "number" && !Number.isNaN(item));

  if (numbers.length === 0) {
    console.log("ما في قيم عددية في المصفوفة");
    return;
  }

  // Math.max تحسب أكبر قيمة، و(...) تفكك المصفوفة لعناصر منفصلة
  const max = Math.max(...numbers);
  console.log(max);
}

// مثال للتجربة
printMaxValue([3, 7, 1, 9, 4, 2]); // 9
