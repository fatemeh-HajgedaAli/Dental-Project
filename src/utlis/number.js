export function toPersianDigits(value) {
  if (value === null || value === undefined) return "";

  return String(value).replace(/\d/g, (digit) => {
    return "۰۱۲۳۴۵۶۷۸۹"[digit];
  });
}
