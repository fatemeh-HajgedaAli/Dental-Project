import AppointmentInput from "./AppointmentInput";
import AppointmentSelect from "./AppointmentSelect";
import AppointmentTextarea from "./AppointmentTextarea";

export default function AppointmentFields({ errors, services }) {
  return (
    <>
      <AppointmentInput
        name="name"
        placeholder="نام و نام خانوادگی"
        error={errors.name}
      />

      <AppointmentInput
        name="phone"
        placeholder="شماره موبایل"
        maxLength="11"
        inputMode="numeric"
        error={errors.phone}
      />

      <AppointmentInput
        name="email"
        type="email"
        placeholder="ایمیل (اختیاری)"
        error={errors.email}
      />

      <AppointmentInput name="date" type="date" error={errors.date} />

      <AppointmentSelect options={services} />

      <AppointmentTextarea />
    </>
  );
}
