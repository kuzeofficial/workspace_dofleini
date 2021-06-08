import * as React from "react"
import { DataContext } from "../../lib/DaContext";

function SvgComponent(props) {
  const {value}=React.useContext(DataContext);
  const{linkWorkspace,imageProfile,workspaceName,peopleAmount,theme,status} =value;
  
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={557}
      height={598}
      viewBox="0 0 807 598"
      {...props}
      className="position-fixed responsiveWidth"
    >
      <defs>
        <filter
          id="prefix__b"
          x={135}
          y={34}
          width={830}
          height={602}
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy={32} />
          <feGaussianBlur stdDeviation={25} result="c" />
          <feFlood floodOpacity={0.059} />
          <feComposite operator="in" in2="c" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="prefix__e"
          x={276}
          y={273}
          width={573}
          height={46}
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy={1} />
          <feGaussianBlur result="f" />
          <feFlood floodColor="#c1d2db" />
          <feComposite operator="in" in2="f" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="prefix__g"
          x={276}
          y={320}
          width={573}
          height={46}
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy={1} />
          <feGaussianBlur result="h" />
          <feFlood floodColor="#c1d2db" />
          <feComposite operator="in" in2="h" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="prefix__i"
          x={276}
          y={367}
          width={573}
          height={46}
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy={1} />
          <feGaussianBlur result="j" />
          <feFlood floodColor="#c1d2db" />
          <feComposite operator="in" in2="j" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="prefix__k"
          x={276}
          y={414}
          width={573}
          height={46}
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy={1} />
          <feGaussianBlur result="l" />
          <feFlood floodColor="#c1d2db" />
          <feComposite operator="in" in2="l" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="prefix__m"
          x={276}
          y={461}
          width={573}
          height={46}
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy={1} />
          <feGaussianBlur result="n" />
          <feFlood floodColor="#c1d2db" />
          <feComposite operator="in" in2="n" />
          <feComposite in="SourceGraphic" />
        </filter>
        <clipPath id="prefix__a">
          <path
            transform="translate(1093 225)"
            stroke="#707070"
            fill="#fff"
            d="M0 0h807v598H0z"
          />
        </clipPath>
        <clipPath id="prefix__d">
          <path
            className="prefix__b"
            transform="translate(3689 642)"
            d="M0 0h680v452H0z"
          />
        </clipPath>
        <clipPath id="prefix__o">
          <path
            className="prefix__c"
            d="M5 0h675v447a5 5 0 01-5 5H0V5a5 5 0 015-5z"
            transform="translate(3689 642)"
          />
        </clipPath>
        <style>
          {
            ".prefix__b,.prefix__k{fill:#fff}.prefix__b{stroke:#e4e4e4}.prefix__c{fill:#f5f6f8}.prefix__ac,.prefix__h{fill:none}.prefix__h{stroke:#48b5fe}.prefix__r{opacity:.5}.prefix__n{fill:#bcbec1}.prefix__p{fill:#e1e8eb}.prefix__aa,.prefix__r{fill:#cfd0d2}.prefix__s{fill:#48b5fe}.prefix__u{fill:#dfdfdf}.prefix__v{fill:#538944}.prefix__v,.prefix__w{font-size:14px}.prefix__v{font-family:OpenSans-SemiBold,Open Sans;font-weight:600}.prefix__w{font-family:OpenSans-Regular,Open Sans}.prefix__af{stroke:none}"
          }
        </style>
      </defs>
      <g transform="translate(-1093 -225)" clipPath="url(#prefix__a)">
        <g transform="translate(1335.787 224.819)">
          <circle
            cx={37.944}
            cy={37.944}
            transform="translate(211.027 21.048)"
            fill="#feaf31"
            r={37.944}
          />
          <path
            fill="#f5f5f5"
            d="M299.162.351l61.157 35.309-93.806 162.476-61.157-35.31z"
          />
          <path
            d="M174.746 160.667c-5.217 3.069-11.438 7.973-18.217 15.848"
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </g>
        <g className="prefix__h" transform="translate(1531.799 250.927)">
          <circle className="prefix__af" cx={3.502} cy={3.502} r={3.502} />
          <circle className="prefix__ac" cx={3.502} cy={3.502} r={3.002} />
        </g>
        <path
          opacity={0.5}
          fill="#eaf0ff"
          d="M1238.562 573.546h102.37v97.16h-102.37z"
        />
        <path
          d="M1241.433 502.819l-51.646 49.011 98.022 55.859z"
          fill="#d8dfff"
        />
        <g className="prefix__h" transform="translate(1175.7 608.964)">
          <circle className="prefix__af" cx={3.502} cy={3.502} r={3.502} />
          <circle className="prefix__ac" cx={3.502} cy={3.502} r={3.002} />
        </g>
        <g className="prefix__h" transform="translate(1221.722 687.001)">
          <circle className="prefix__af" cx={3.502} cy={3.502} r={3.502} />
          <circle className="prefix__ac" cx={3.502} cy={3.502} r={3.002} />
        </g>
        <g transform="translate(-2386 -340)">
          <g transform="translate(3479 565)" filter="url(#prefix__b)">
            <path
              className="prefix__k"
              d="M215 77h675v447a5 5 0 01-5 5H215a5 5 0 01-5-5V82a5 5 0 015-5z"
            />
          </g>
          <g clipPath="url(#prefix__d)">
            <g className="prefix__b">
              <path className="prefix__af" d="M3689 717h688v377h-688z" />
              <path className="prefix__ac" d="M3689.5 717.5h687v376h-687z" />
            </g>
            <g transform="translate(3767 688)" stroke="#196fc1" fill="#f5f6f8">
              <rect className="prefix__af" width={626} height={24} rx={12} />
              <rect
                className="prefix__ac"
                x={0.5}
                y={0.5}
                width={625}
                height={23}
                rx={11.5}
              />
            </g>
          </g>
          <g transform="translate(-28 -11)">
            <path
              className="prefix__n"
              d="M3781 849h8v46h-8zM3781 896h8v46h-8zM3781 990h8v46h-8zM3781 1037h8v46h-8z"
            />
            <g transform="translate(3507 576)" filter="url(#prefix__e)">
              <path className="prefix__c" d="M276 273h573v45H276z" />
            </g>
            <g transform="translate(3507 576)" filter="url(#prefix__g)">
              <path className="prefix__c" d="M276 320h573v45H276z" />
            </g>
            <g transform="translate(3507 576)" filter="url(#prefix__i)">
              <path fill="#c7e4ff" d="M276 367h573v45H276z"/>
            </g>
            <g transform="translate(3507 576)" filter="url(#prefix__k)">
              <path className="prefix__c" d="M276 414h573v45H276z" />
            </g>
            <g transform="translate(3507 576)" filter="url(#prefix__m)">
              <path className="prefix__c" d="M276 461h573v45H276z" />
            </g>
            <path
              className="prefix__p"
              d="M4119 849h177v45h-177zM4119 896h177v45h-177z"
            />
            <path fill="#b4d5f5" d="M4119 943h177v45h-177z" />
            <path
              className="prefix__p"
              d="M4119 990h177v45h-177zM4119 1037h177v45h-177z"
            />
            <rect
              className="prefix__r"
              width={145}
              height={19}
              rx={9.5}
              transform="translate(3781 817)"
            />
            <rect
              className="prefix__r"
              width={107}
              height={9}
              rx={4.5}
              transform="translate(3797 867)"
            />
            <rect
              className="prefix__r"
              width={107}
              height={9}
              rx={4.5}
              transform="translate(3910 867)"
            />
            <rect
              className="prefix__r"
              width={83}
              height={9}
              rx={4.5}
              transform="translate(4135 867)"
            />
            <rect
              className="prefix__r"
              width={28}
              height={9}
              rx={4.5}
              transform="translate(4135 913)"
            />
            <rect
              className="prefix__r"
              width={85}
              height={9}
              rx={4.5}
              transform="translate(4169 913)"
            />
            <rect
              className="prefix__s"
              width={95}
              height={9}
              rx={4.5}
              transform="translate(4135 960)"
              style={{
                fill:theme
              }}
            />
            <rect
              className="prefix__r"
              width={28}
              height={9}
              rx={4.5}
              transform="translate(4226 1007)"
            />
            <rect
              className="prefix__r"
              width={85}
              height={9}
              rx={4.5}
              transform="translate(4135 1007)"
            />
            <rect
              className="prefix__r"
              width={102}
              height={9}
              rx={4.5}
              transform="translate(4135 1054)"
            />
            <rect
              className="prefix__r"
              width={51}
              height={9}
              rx={4.5}
              transform="translate(4023 867)"
            />
            <rect
              className="prefix__r"
              width={44}
              height={9}
              rx={4.5}
              transform="translate(3797 913)"
            />
            <rect
              className="prefix__s"
              width={117}
              height={9}
              rx={4.5}
              transform="translate(3797 960)"
              style={{
                fill:theme
              }}
            />
            <rect
              className="prefix__r"
              width={103}
              height={9}
              rx={4.5}
              transform="translate(3847 913)"
            />
            <rect
              className="prefix__r"
              width={44}
              height={9}
              rx={4.5}
              transform="translate(3816 1054)"
            />
            <rect
              className="prefix__r"
              width={103}
              height={9}
              rx={4.5}
              transform="translate(3797 1007)"
            />
            <rect
              className="prefix__r"
              width={72}
              height={9}
              rx={4.5}
              transform="translate(3975 913)"
            />
            <rect
              className="prefix__s"
              width={103}
              height={9}
              rx={4.5}
              transform="translate(3920 960)"
              style={{
                fill:theme
              }}
            />
            <rect
              className="prefix__r"
              width={13}
              height={9}
              rx={4.5}
              transform="translate(3956 913)"
            />
            <rect
              className="prefix__r"
              width={44}
              height={9}
              rx={4.5}
              transform="translate(4015 1007)"
            />
            <rect
              className="prefix__s"
              width={44}
              height={9}
              rx={4.5}
              transform="translate(4029 960)"
              style={{
                fill:theme
              }}
            />
            <rect
              className="prefix__r"
              width={103}
              height={9}
              rx={4.5}
              transform="translate(3906 1007)"
            />
            <rect
              className="prefix__r"
              width={103}
              height={9}
              rx={4.5}
              transform="translate(3866 1054)"
            />
            <rect
              className="prefix__r"
              width={13}
              height={9}
              rx={4.5}
              transform="translate(4065 1007)"
            />
            <rect
              className="prefix__r"
              width={112}
              height={9}
              rx={4.5}
              transform="translate(3975 1054)"
            />
            <rect
              className="prefix__r"
              width={13}
              height={9}
              rx={4.5}
              transform="translate(3797 1054)"
            />
            <path className="prefix__s" d="M3781 943h6v46h-6z" style={{
                fill:theme
              }} />
          </g>
          <path d="M3694 642h675v42h-680v-37a5 5 0 015-5z" fill="#e7eaee" />
          <path className="prefix__u" d="M3689 716h680v1h-680z" />
          <path
            className="prefix__k"
            d="M3716.049 651h192.556c3.97 0 7.189 2.239 7.189 5v21s-.331 7 8.659 7h-223.222c6.676 0 7.629-7 7.629-7v-21c.001-2.762 3.219-5 7.189-5z"
          />
          <text className="prefix__v" transform="translate(3791.538 705.215)">
            <tspan x={0} y={0}>
              {"Secure"}
            </tspan>
          </text>
          <text className="prefix__v" transform="translate(3850.538 705.215)">
            <tspan x={0} y={0}>
              {"https:"}
            </tspan>
          </text>
          <text className="prefix__w" transform="translate(3892.538 705.215)">
            <tspan x={0} y={0}>
              {linkWorkspace}
            </tspan>
          </text>
          <text className="prefix__w" transform="translate(3742.538 673.215)">
            <tspan x={0} y={0}>
              {workspaceName}
            </tspan>
          </text>
          <path opacity={0.2} fill="#2b2b2b" d="M3843 692h1v16h-1z" />
          <circle
            className="prefix__u"
            cx={10}
            cy={10}
            r={10}
            transform="translate(3716 658)"
          />
          <g transform="translate(3719.776 661.963)">
            <rect
              className="prefix__k"
              width={10.252}
              height={2.239}
              rx={1.12}
              transform="translate(0 6.718)"
            />
            <rect
              className="prefix__k"
              width={7.831}
              height={2.239}
              rx={1.12}
              transform="translate(2.421)"
            />
            <rect
              className="prefix__k"
              width={6.155}
              height={2.239}
              rx={1.12}
              transform="translate(6.337 3.359)"
            />
            <rect
              className="prefix__k"
              width={4.479}
              height={2.239}
              rx={1.12}
              transform="translate(.182 3.359)"
            />
            <rect
              className="prefix__k"
              width={4.479}
              height={2.239}
              rx={1.12}
              transform="translate(.182 10.097)"
            />
          </g>
          <g clipPath="url(#prefix__o)">
            <g transform="translate(3689 716)">
              <g className="prefix__b">
                <path className="prefix__af" d="M0 0h49v378H0z" />
                <path className="prefix__ac" d="M.5.5h48v377H.5z" />
              </g>
              <rect
                width={34}
                height={37}
                rx={3}
                transform="translate(7 90)"
                fill="#ebf7ff"
              />
              <g transform="translate(14 14.941)">
                <rect
                  className="prefix__aa"
                  width={21.244}
                  height={4.641}
                  rx={2.32}
                  transform="translate(0 13.922)"
                />
                <rect
                  className="prefix__aa"
                  width={16.227}
                  height={4.641}
                  rx={2.32}
                  transform="translate(5.009)"
                />
                <rect
                  className="prefix__aa"
                  width={12.754}
                  height={4.641}
                  rx={2.32}
                  transform="translate(13.122 6.961)"
                />
                <rect
                  className="prefix__aa"
                  width={9.281}
                  height={4.641}
                  rx={2.32}
                  transform="translate(0 6.961)"
                />
                <rect
                  className="prefix__aa"
                  width={9.281}
                  height={4.641}
                  rx={2.32}
                  transform="translate(0 20.922)"
                />
              </g>
              <g transform="translate(12.827)">
                <circle
                  className="prefix__aa"
                  cx={11.5}
                  cy={11.5}
                  r={11.5}
                  transform="translate(.173 205)"
                />
                <circle
                  className="prefix__aa"
                  cx={11.5}
                  cy={11.5}
                  r={11.5}
                  transform="translate(.173 169)"
                />
                <circle
                  className="prefix__aa"
                  cx={11.5}
                  cy={11.5}
                  r={11.5}
                  transform="translate(.173 133)"
                />
                {!imageProfile
                ? <circle
                className="prefix__s"
                cx={11.5}
                cy={11.5}
                r={11.5}
                transform="translate(.173 97)"
                style={{
                  fill:theme,
                  background:"red"
                }}
              ></circle>
              :<image href={imageProfile}  
              x={-13}
              y={83}
              width={50}
              height={50}
              />
              }                                  
                <circle
                  className="prefix__aa"
                  cx={11.5}
                  cy={11.5}
                  r={11.5}
                  transform="translate(.173 61)"

                />
              </g>
            </g>
            <g transform="translate(3737 716)">
              <g className="prefix__b">
                <path className="prefix__af" d="M0 0h589v56H0z" />
                <path className="prefix__ac" d="M.5.5h588v55H.5z" />
              </g>
              <rect
                className="prefix__s"
                width={119}
                height={32}
                rx={16}
                transform="translate(409 12)"
                style={{
                  fill:theme
                }}
              />
              <path
                d="M251.65 25.04a1 1 0 01.56 1.75l-3.67 3.18 1.1 4.73a1 1 0 01-1.49 1.08L244 33.27l-4.15 2.5a1 1 0 01-1.49-1.08l1.1-4.72-3.67-3.18a1 1 0 01.57-1.75l4.83-.41 1.89-4.459a1 1 0 011.84 0l1.89 4.45 4.84.42z"
                fill="#ffc60a"
              />
              <rect
                className="prefix__r"
                width={211}
                height={21}
                rx={10.5}
                transform="translate(16 18)"
                />
                <text
                x="25"
                y="33"
                style={{
                  fill:"black"}}
                >Trabajadores:<tspan> {peopleAmount}}</tspan></text>
               <text
                x="440"
                y="33"
                style={{
                  fill:"white"}}
                >{status}</text>
            </g>
          </g>
          <path className="prefix__ac" d="M3740 693h14.931v14.931H3740z" />
          <path d="M3750.985 696.951a4.978 4.978 0 101.294 4.759h-1.294a3.731 3.731 0 11-3.519-4.977 3.68 3.68 0 012.625 1.107l-2 2h4.355v-4.351z" />
          <g opacity={0.2}>
            <path className="prefix__ac" d="M3718 693h15v15h-15z" />
            <path d="M3725.5 695.5l-.881.881 3.488 3.494h-7.607v1.25h7.606l-3.487 3.494.881.881 5-5z" />
          </g>
          <path className="prefix__ac" d="M3712 693h-15v15h15z" />
          <path d="M3704.5 695.5l.881.881-3.487 3.494h7.606v1.25h-7.606l3.488 3.494-.882.881-5-5z" />
          <path
            className="prefix__ac"
            d="M3891.797 660.796h14.407v14.407h-14.407z"
          />
          <path d="M3903.199 664.644l-.842-.846-3.358 3.356-3.354-3.356-.846.846 3.356 3.354-3.356 3.358.846.846 3.354-3.355 3.358 3.351.846-.846-3.355-3.354z" />
          <g>
            <path
              className="prefix__ac"
              d="M3924.893 658.524h17.583v17.583h-17.583z"
            />
            <path d="M3938.813 668.048h-4.4v4.4h-1.457v-4.4h-4.4v-1.461h4.4v-4.4h1.465v4.4h4.4z" />
          </g>
          <g>
            <path
              className="prefix__ac"
              d="M3776 693.857h12.794v12.794H3776z"
            />
            <path
              d="M3785.595 698.122h-.533v-1.067a2.666 2.666 0 10-5.331 0v1.067h-.533a1.069 1.069 0 00-1.066 1.068v5.331a1.069 1.069 0 001.066 1.066h6.4a1.069 1.069 0 001.066-1.066v-5.331a1.069 1.069 0 00-1.069-1.068zm-3.2 4.8a1.066 1.066 0 111.068-1.069 1.069 1.069 0 01-1.066 1.066zm1.653-4.8h-3.304v-1.067a1.653 1.653 0 113.305 0z"
              fill="#538944"
            />
          </g>
        </g>
      </g>
    </svg>
  )
}

export default SvgComponent;
