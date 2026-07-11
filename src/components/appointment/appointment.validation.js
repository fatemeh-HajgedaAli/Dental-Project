export function validateAppointment(values) {
  const errors = {};

  const nameRegex = /^[آ-ی\s]+$/;
  const phoneRegex = /^09\d{9}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (
    !values.name ||
    !nameRegex.test(values.name) ||
    values.name.split(" ").filter(Boolean).length < 2
  ) {
    errors.name = "لطفاً نام و نام خانوادگی صحیح وارد کنید";
  }

  if (!phoneRegex.test(values.phone)) {
    errors.phone = "شماره موبایل باید ۱۱ رقم و با 09 شروع شود";
  }

  if (values.email && !emailRegex.test(values.email)) {
    errors.email = "فرمت ایمیل صحیح نیست";
  }

  if (!values.date) {
    errors.date = "لطفاً تاریخ مراجعه را انتخاب کنید";
  }

  return errors;
}
