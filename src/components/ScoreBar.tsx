import { semiannualCalculator } from '../store/semiannualCalculator';

export default function ScoreBar() {
  const results = semiannualCalculator((state) => state.results);

  const getThemeColor = (g: number) => {
    if (g === 5) return '#11ba82'; // Yaşıl
    if (g === 4) return '#2563eb'; // Mavi
    if (g === 3) return '#f1c40f'; // Sarı
    return '#ef4444'; // Qırmızı
  };

  const themeColor = getThemeColor(results.grade);



  return (
    <div className="bg-white rounded-[12px] md:p-[33px] p-[25px] flex flex-col gap-8  items-start ">
      <div className="flex flex-col gap-8 items-center justify-center">
        <p className="text-xs tracking-widest text-gray-400 uppercase">
          Yarımillik bal
        </p>

        <span className="md:text-6xl text-5xl font-bold text-gray-900 dark:text-white leading-none">
          {results.score}
        </span>

        <div className="relative md:w-[402px] md:h-[16px] w-[302px] h-[12px] rounded-full overflow-hidden bg-gray-100 border border-gray-200">
          {/* Rəngli Bar (Dinamik Gradient) */}
          <div
            className="absolute inset-0 rounded-full transition-all duration-700 ease-out"
            style={{
              background: `linear-gradient(to right, #fca5a5, ${themeColor})`, 
              clipPath: `inset(0 ${100 - results.score}% 0 0)`, 
            }}
          />
        </div>

        <div className="flex flex-col items-center justify-center gap-2">
          <div
            className="flex items-center justify-center text-white rounded-full transition-colors duration-500"
            style={{
              backgroundColor: themeColor,
              width: '80px',
              height: '80px',
            }}
          >
            <h1 className="text-3xl font-bold">{results.grade}</h1>
          </div>
          <span className="text-sm font-semibold tracking-wider">
            QIYMƏTINIZ
          </span>
        </div>
      </div>

      <div className="flex items-start gap-3 justify-start border border-[#dee8fc] bg-[#f5f8ff] p-5 rounded-[12px] md:w-[402px] w-[308px]">
        <div>
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.5 12.5H9.16667V7.5H7.5V12.5ZM8.33333 5.83333C8.56944 5.83333 8.76736 5.75347 8.92708 5.59375C9.08681 5.43403 9.16667 5.23611 9.16667 5C9.16667 4.76389 9.08681 4.56597 8.92708 4.40625C8.76736 4.24653 8.56944 4.16667 8.33333 4.16667C8.09722 4.16667 7.89931 4.24653 7.73958 4.40625C7.57986 4.56597 7.5 4.76389 7.5 5C7.5 5.23611 7.57986 5.43403 7.73958 5.59375C7.89931 5.75347 8.09722 5.83333 8.33333 5.83333ZM8.33333 16.6667C7.18056 16.6667 6.09722 16.4479 5.08333 16.0104C4.06944 15.5729 3.1875 14.9792 2.4375 14.2292C1.6875 13.4792 1.09375 12.5972 0.65625 11.5833C0.21875 10.5694 0 9.48611 0 8.33333C0 7.18056 0.21875 6.09722 0.65625 5.08333C1.09375 4.06944 1.6875 3.1875 2.4375 2.4375C3.1875 1.6875 4.06944 1.09375 5.08333 0.65625C6.09722 0.21875 7.18056 0 8.33333 0C9.48611 0 10.5694 0.21875 11.5833 0.65625C12.5972 1.09375 13.4792 1.6875 14.2292 2.4375C14.9792 3.1875 15.5729 4.06944 16.0104 5.08333C16.4479 6.09722 16.6667 7.18056 16.6667 8.33333C16.6667 9.48611 16.4479 10.5694 16.0104 11.5833C15.5729 12.5972 14.9792 13.4792 14.2292 14.2292C13.4792 14.9792 12.5972 15.5729 11.5833 16.0104C10.5694 16.4479 9.48611 16.6667 8.33333 16.6667ZM8.33333 15C10.1944 15 11.7708 14.3542 13.0625 13.0625C14.3542 11.7708 15 10.1944 15 8.33333C15 6.47222 14.3542 4.89583 13.0625 3.60417C11.7708 2.3125 10.1944 1.66667 8.33333 1.66667C6.47222 1.66667 4.89583 2.3125 3.60417 3.60417C2.3125 4.89583 1.66667 6.47222 1.66667 8.33333C1.66667 10.1944 2.3125 11.7708 3.60417 13.0625C4.89583 14.3542 6.47222 15 8.33333 15Z"
              fill="#2563EB"
            />
          </svg>
        </div>

        <div className="flex flex-col items-start justify-start gap-2 ">
          <p className="text-[#475569]">
            Bu nəticə bütün KSQ-lərin 40%-i və BSQ-nin 60%- i əsasında
            hesablanmışdır.
          </p>
          <h3 className="text-[#2664eb] font-medium">
            Təbriklər! Əla nəticədir.
          </h3>
        </div>
      </div>

      <div className="  flex  items-center justify-between w-full">
        <div className="rounded-[12px] border border-[#dee8fc] flex flex-col items-start justify-start md:w-[193px] w-[148px] bg-[#f7fafc] p-4">
          <span className=" font-semibold text-sm text-[#65758c]">
            KSQ ORTA
          </span>
          <h1 className="text-[18px] font-semibold">{results.ksqAvg}</h1>
        </div>
        <div className=" rounded-[12px] border border-[#dee8fc] font-semibold flex flex-col items-start justify-start md:w-[193px] w-[148px] bg-[#f7fafc] p-4">
          <span className=" text-[#65758c] text-sm">MAKSIMAL</span>
          <h1 className="text-[18px] font-semibold">100</h1>
        </div>
      </div>
    </div>
  );
}
