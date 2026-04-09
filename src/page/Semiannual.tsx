import ScoreBar from '@/components/ScoreBar';

import { semiannualCalculator } from "../store/semiannualCalculator";
import { Switch } from '@/components/ui/switch';

const Semiannual = () => {
  const Ksqinputs = semiannualCalculator((state) => state.Ksqinputs);
  const BsqValue = semiannualCalculator((state) => state.BsqValue);
  const {
    addInput,
    removeInput,
    isBsqActive,
    toggleBsq,
    calculateResults,
    handleChangeKsq,
    handleChangeBsq,
  } = semiannualCalculator();
  
  return (
    <div className="mt-10 flex flex-col gap-8 mb-10 md:items-start md:justify-start items-center justify-center">
      <div className="flex flex-col md:items-start md:justify-start items-center justify-center">
        <h1 className="md:text-[32px]  text-[24px] font-bold">
          Smester Balı Hesablayıcı
        </h1>
        <p className="text-sm text-gray-400 text-center ">
          Ksq və Bsq Ballarınızı daxil edərək yarımillik nəticənizi dərhal
          öyrənin
        </p>
      </div>

      <div className=" flex md:flex-row  flex-col justify-start items-start gap-8">
        <div className="bg-white rounded-[12px] p-6 flex flex-col gap-4">
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-start gap-3">
              <svg
                width="18"
                height="16"
                viewBox="0 0 18 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 10V8H7V10H0ZM0 6V4H11V6H0ZM0 2V0H11V2H0ZM9 16V12.925L14.525 7.425C14.675 7.275 14.8417 7.16667 15.025 7.1C15.2083 7.03333 15.3917 7 15.575 7C15.775 7 15.9667 7.0375 16.15 7.1125C16.3333 7.1875 16.5 7.3 16.65 7.45L17.575 8.375C17.7083 8.525 17.8125 8.69167 17.8875 8.875C17.9625 9.05833 18 9.24167 18 9.425C18 9.60833 17.9667 9.79583 17.9 9.9875C17.8333 10.1792 17.725 10.35 17.575 10.5L12.075 16H9ZM16.5 9.425L15.575 8.5L16.5 9.425ZM10.5 14.5H11.45L14.475 11.45L14.025 10.975L13.55 10.525L10.5 13.55V14.5ZM14.025 10.975L13.55 10.525L14.475 11.45L14.025 10.975Z"
                  fill="#2563EB"
                />
              </svg>
              <h1 className="font-bold text-xl">KSQ və BSQ Balları</h1>
            </div>

            <div className="flex  flex-col justify-between items-center gap-4">
              <div className="flex justify-between items-center w-full ">
                <h3 className="text-[16px] text-[#65758c] ">KSQ BALLARI</h3>
                <span className="text-[14px] text-[#94a3b8] ">
                  0-100 arası daxil edin{' '}
                </span>
              </div>

              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                  {Ksqinputs.map((input, index) => (
                    <div
                      className="flex flex-col items-start justify-start"
                      key={input.id}
                    >
                      <label>KSQ {index + 1}:</label>
                      <div className="flex items-center justify-center gap-8">
                        <input
                          type="number"
                          value={input.value || ''}
                          onChange={(e) =>
                            handleChangeKsq(input.id, Number(e.target.value))
                          }
                          className="p-3 md:w-[562px] md:h-[50px] w-[264px] h-[50px] rounded-[12px] bg-[#f7fafc] border-b border-gray-200"
                        />
                        <button onClick={() => removeInput(input.id)}>
                          <svg
                            width="16"
                            height="18"
                            viewBox="0 0 16 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M3 18C2.45 18 1.97917 17.8042 1.5875 17.4125C1.19583 17.0208 1 16.55 1 16V3H0V1H5V0H11V1H16V3H15V16C15 16.55 14.8042 17.0208 14.4125 17.4125C14.0208 17.8042 13.55 18 13 18H3ZM13 3H3V16H13V3ZM5 14H7V5H5V14ZM9 14H11V5H9V14ZM3 3V16V3Z"
                              fill="#EF4444"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  onClick={addInput}
                  className=" cursor-pointer flex items-center justify-center gap-3 text-[16px] text-[#10b981] font-bold rounded-[12px] border-2 border-dashed border-[#10b981] md:w-[618px]  md:h-[52px]   w-[316px]  h-[48px]                       "
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 15H11V11H15V9H11V5H9V9H5V11H9V15ZM10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20ZM10 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 10C18 7.76667 17.225 5.875 15.675 4.325C14.125 2.775 12.2333 2 10 2C7.76667 2 5.875 2.775 4.325 4.325C2.775 5.875 2 7.76667 2 10C2 12.2333 2.775 14.125 4.325 15.675C5.875 17.225 7.76667 18 10 18Z"
                      fill="#059669"
                    />
                  </svg>
                  KSQ Əlavə et
                </button>

                <div className="w-full h-[1px] bg-gray-200"></div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h1>BSQ BALI</h1>
            <div className="flex flex-col  gap-3">
              <label>BSQ Nəticəsi</label>
              <input
                value={isBsqActive ? BsqValue || '' : ''}
                disabled={!isBsqActive}
                type="number"
                className={`p-3 md:w-[562px] md:h-[50px] w-[316px] h-[48px] rounded-[12px] bg-[#f7fafc] border-b border-gray-200 outline-none 
                 ${!isBsqActive ? 'pointer-events-none select-none caret-transparent opacity-50' : 'caret-black'}`}
                onChange={(e) => handleChangeBsq(Number(e.target.value))}
              />
            </div>
            <div className="flex items-center justify-start gap-3">
              <Switch
              
                id="switch-size-default"
                size="default"
                checked={isBsqActive}
               onCheckedChange={(checked: boolean) => toggleBsq(checked)}
              />
              <h1>BSQ-siz sinif (1-4-cü siniflər)</h1>
            </div>
          </div>

          <button
            onClick={calculateResults}
            className=" cursor-pointer  flex items-center justify-center gap-3 text-white text-[18px] bg-[#3b82f5] md:w-[618px]  md:h-[60px]  w-[316px]  h-[48px]   rounded-xl"
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

        <ScoreBar />
      </div>
    </div>
  );
};

export default Semiannual;
