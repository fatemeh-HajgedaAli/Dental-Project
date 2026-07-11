import React from "react";

export default function ClinicInfo() {
  return (
    <div
      className="bg-gradient-to-br from-slate-50 to-blue-50/30 rounded-3xl p-6 md:p-10 border border-gray-100 max-w-xl mx-auto"
      dir="rtl"
    >
      <h2 className="text-2xl font-extrabold text-gray-900 mb-8 relative inline-block">
        اطلاعات کلینیک
        <span className="absolute bottom-[-6px] right-0 w-8 h-1 bg-blue-600 rounded-full"></span>
      </h2>

      <div className="space-y-6">
        <div className="flex flex-col gap-1.5 p-3 rounded-2xl hover:bg-white transition-all">
          <h3 className="text-sm font-bold text-blue-600 uppercase tracking-wider">
            آدرس کلینیک
          </h3>
          <p className="text-gray-700 text-sm md:text-base font-medium leading-relaxed">
            تهران، میدان ونک، خیابان گاندی شمالی، پلاک ۱۲، واحد ۴
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5 p-3 rounded-2xl hover:bg-white transition-all">
            <h3 className="text-sm font-bold text-blue-600 uppercase tracking-wider">
              شماره تلفن
            </h3>
            <p className="text-gray-700 font-semibold dir-ltr text-right">
              ۰۲۱-۸۸۸۸۸۸۸۸
            </p>
          </div>

          <div className="flex flex-col gap-1.5 p-3 rounded-2xl hover:bg-white transition-all">
            <h3 className="text-sm font-bold text-blue-600 uppercase tracking-wider">
              پشتیبانی ایمیل
            </h3>
            <p className="text-gray-700 font-medium text-sm md:text-base">
              hello@aureliadental.com
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2 p-4 bg-white/80 rounded-2xl border border-blue-50">
          <h3 className="text-sm font-bold text-blue-600 uppercase tracking-wider">
            ساعات کاری کلینیک
          </h3>
          <div className="text-gray-600 text-sm space-y-2 mt-1">
            <div className="flex justify-between items-center border-b border-gray-50 pb-1.5">
              <span>شنبه تا چهارشنبه:</span>
              <span className="font-medium text-gray-800">۹ صبح تا ۸ شب</span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-50 pb-1.5">
              <span>پنجشنبه‌ها:</span>
              <span className="font-medium text-gray-800">۹ صبح تا ۴ عصر</span>
            </div>
            <div className="flex justify-between items-center text-red-500 font-medium">
              <span>جمعه‌ها و تعطیلات رسمی:</span>
              <span>تعطیل</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
