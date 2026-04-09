import { annualCalculator } from '@/store/annualCalculator';

const Annual = () => {
  const {
    oneAnnual,
    twoAnnual,
    average,
    setOneAnnual,
    setTwoAnnual,
    calculateScore,
    getGrade,
  } = annualCalculator();

  const getBadgeConfig = (grade: number) => {
    if (grade === 5)
      return { bg: '#ebfcf4', color: '#059669', label: 'Əla nəticə' };
    if (grade === 4)
      return { bg: '#eff6ff', color: '#1d4ed8', label: 'Yaxşı nəticə' };
    if (grade === 3)
      return { bg: '#fefce8', color: '#a16207', label: 'Pis nəticə' };
    return { bg: '#fef2f2', color: '#dc2626', label: 'Çox pis nəticə' };
  };

  const getThemeColor = (g: number) => {
    if (g === 5) return '#11ba82'; // Yaşıl
    if (g === 4) return '#2563eb'; // Mavi
    if (g === 3) return '#f1c40f'; // Sarı
    return '#ef4444'; // Qırmızı
  };

  const themeColor = getThemeColor(getGrade(average));

  const badge = getBadgeConfig(getGrade(average));

  return (
    <div className=" flex flex-col md:items-start md:justify-start gap-10  items-center justify-center mt-[48px] mb-10">
      <div className=" flex flex-col md:items-start md:justify-start text-center">
        <h1 className="md:text-[32px]  text-[24px] font-bold">
          illik Bal Hesablayıcı
        </h1>
        <p className="text-sm text-gray-400 text-center ">
          Yarımil ballarınızı daxil edərək illik nəticənizi dərhal öyrənin
        </p>
      </div>

      <div className="flex flex-col items-center justify-center gap-10">
        <div className="flex md:flex-row  flex-col md:justify-between md:items-center gap-6">
          <div className="bg-white border border-[#f2f6fa]  border-2 rounded-[12px] p-6 flex flex-col items-center justify-center md:gap-4 gap-2 md:w-[548px]  md:h-[348px] w-[358px] h-[308px] ">
            <div className="flex flex-col items-center justify-center gap-2">
              <h1 className="flex items-center justify-center border-[#d2dffa] border-[4px] border-solid w-[36px] h-[36px] rounded-[6px] text-[16px] text-[#d2dffa] font-medium">
                1
              </h1>
              <h2 className="font-medium md:text-[22px] text-[18px]">
                I Yarımil
              </h2>
            </div>
            <div className="flex flex-col items-start justify-start">
              <label className="text-[#93a2b8]  md:text-xl text-sm ">
                Balı Daxil Edin
              </label>
              <input
                value={oneAnnual || ''}
                onChange={(e) => setOneAnnual(Number(e.target.value))}
                type="number"
                className=" md:w-[170px] md:h-[60px] w-[128px] h-14 rounded-[16px] font-bold md:text-xl text-[18px] bg-[#f7fafc] text-center  focus:border-[#3b82f5]. "
              />
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <div
                className="md:w-16 md:h-16  w-12 h-12 rounded-full  flex items-center justify-center text-2xl"
                style={{ backgroundColor: themeColor }}
              >
                <h1 className="text-white font-bold text-2xl">
                  {oneAnnual ? getGrade(oneAnnual) : '0'}
                </h1>
              </div>
              <span className="text-[#afbbc9]">Yarımil Qiymət</span>
            </div>
          </div>

          <div className="border border-[#f2f6fa] border-2 bg-white rounded-[12px] flex flex-col items-center justify-center  md:gap-4 gap-2 md:w-[548px] md:h-[348px] w-[358px] h-[308px]">
            <div className="flex flex-col items-center justify-center gap-2">
              <h1 className="flex items-center justify-center border-[#d2dffa] border-[4px] border-solid w-[36px] h-[36px] rounded-[6px] text-[16px] text-[#d2dffa] font-medium">
                2
              </h1>
              <h2 className="font-medium md:text-[22px] text-[18px]">
                II Yarımil
              </h2>
            </div>
            <div className="flex flex-col items-start justify-start">
              <label className="text-[#93a2b8] md:text-xl text-sm">
                Balı Daxil Edin
              </label>
              <input
                value={twoAnnual || ''}
                onChange={(e) => setTwoAnnual(Number(e.target.value))}
                type="number"
                className=" md:w-[170px] md:h-[60px] w-[128px] h-14 rounded-[16px]  font-bold md:text-xl text-[18px] bg-[#f7fafc] text-center focus:border-[#3b82f5]"
              />
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <div 
                style={{ backgroundColor: themeColor }}
              className="md:w-16 md:h-16  w-12 h-12 text-white rounded-full flex items-center justify-center text-2xl">
                <h1>{twoAnnual ? getGrade(twoAnnual) : '0'}</h1>
              </div>
              <span className="text-[#afbbc9]">Yarımil Qiymət</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-10 bg-white md:py-12 md:px-26 p-6 rounded-2xl">
          <div className="flex flex-col items-center justify-center gap-8">
            <span className="text-[#2563EB] text-[16px] font-medium">
              İllik Nəticə
            </span>
            <h1 className="text-8xl font-bold"> {average}</h1>
          </div>

          <div className="flex flex-col items-center justify-center gap-2">
            <div className="relative md:w-[402px] md:h-[16px] w-[302px] h-[12px] rounded-full overflow-hidden bg-gray-100 border border-gray-200">
              {/* Rəngli Bar (Dinamik Gradient) */}
              <div
                className="absolute inset-0 rounded-full transition-all duration-700 ease-out"
                style={{
                  background: `linear-gradient(to right, #fca5a5, ${themeColor})`,
                  clipPath: `inset(0 ${100 - average}% 0 0)`,
                }}
              />
            </div>
            <div className="flex w-full justify-between items-center">
              <span>0</span>
              <span>50</span>
              <span>100</span>
            </div>
          </div>
          <div
            className="flex gap-3 items-center justify-center w-[159px] h-10 rounded-full"
            style={{ backgroundColor: badge.bg, color: badge.color }}
          >
            <svg
              width="22"
              height="21"
              viewBox="0 0 22 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.6 21L5.7 17.8L2.1 17L2.45 13.3L0 10.5L2.45 7.7L2.1 4L5.7 3.2L7.6 0L11 1.45L14.4 0L16.3 3.2L19.9 4L19.55 7.7L22 10.5L19.55 13.3L19.9 17L16.3 17.8L14.4 21L11 19.55L7.6 21ZM8.45 18.45L11 17.35L13.6 18.45L15 16.05L17.75 15.4L17.5 12.6L19.35 10.5L17.5 8.35L17.75 5.55L15 4.95L13.55 2.55L11 3.65L8.4 2.55L7 4.95L4.25 5.55L4.5 8.35L2.65 10.5L4.5 12.6L4.25 15.45L7 16.05L8.45 18.45ZM9.95 14.05L15.6 8.4L14.2 6.95L9.95 11.2L7.8 9.1L6.4 10.5L9.95 14.05Z"
                fill={badge.color}
              />
            </svg>
            <h1 style={{ color: badge.color }}>{badge.label}</h1>
          </div>

          <div className="w-full h-[1px] bg-[#f2f6fa]"></div>

          <div className="flex md:flex-row md:justify-between md:items-center flex-col   gap-4 w-full">
            <div className="md:w-[450px] flex flex-col items-center justify-center bg-[#F8FAFC] p-4 rounded-2xl">
              <span className="text-[#94A3B8] text-[16px] font-medium">
                I YARIMIL BAL{' '}
              </span>
              <h1 className="text-[22px] font-medium">{oneAnnual}</h1>
            </div>

            <div className="md:w-[450px] flex flex-col items-center justify-center  bg-[#F8FAFC] p-4 rounded-2xl">
              <span className="text-[#94A3B8] text-[16px] font-medium">
                II YARIMIL BAL{' '}
              </span>
              <h1 className="text-[22px] font-medium">{twoAnnual}</h1>
            </div>
          </div>
        </div>

        <button
          onClick={calculateScore}
          className=" cursor-pointer  flex items-center justify-center gap-3 text-white text-[18px] bg-[#3b82f5] md:w-[300px]  md:h-[60px]  w-[316px]  h-[48px]   rounded-xl"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 14H6V9H4V14V14M12 14H14V4H12V14V14M8 14H10V11H8V14V14M8 9H10V7H8V9V9M2 18C1.45 18 0.979167 17.8042 0.5875 17.4125C0.195833 17.0208 0 16.55 0 16V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H16C16.55 0 17.0208 0.195833 17.4125 0.5875C17.8042 0.979167 18 1.45 18 2V16C18 16.55 17.8042 17.0208 17.4125 17.4125C17.0208 17.8042 16.55 18 16 18H2V18M2 16H16V16V16V2V2V2H2V2V2V16V16V16V16M2 2V2V2V2V16V16V16V16V16V16V2V2V2V2"
              fill="white"
            />
          </svg>
          Hesabla
        </button>
      </div>
    </div>
  );
};

export default Annual;
