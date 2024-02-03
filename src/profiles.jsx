import facebook from './assets/facebook.jpg'
import instagram from './assets/instagram.png'

export default function Profiles() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
          Mnoho dalších nápadů najdete v mém profilu na těchto platformách:
        </h2>
        <div className="mx-auto mt-10 flex lg:flex-row sm:flex-col items-center max-w-lg lg:justify-center gap-x-20 gap-y-10 sm:max-w-xl lg:mx-0 lg:max-w-none">
          <img
            className=" max-h-12  object-contain"
            src={facebook}
            alt="Facebook"
            width={158}
            height={48}
          />
          <img
            className="  max-h-22  object-contain"
            src={instagram}
            alt="Instagram"
            width={158}
            height={48}
          />
          {/* <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"
            alt="Tuple"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
            src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg"
            alt="SavvyCal"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
            src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg"
            alt="Statamic"
            width={158}
            height={48}
          /> */}
        </div>
      </div>
    </div>
  )
}
