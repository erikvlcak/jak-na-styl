/* eslint-disable react/prop-types */
import {
  MagnifyingGlassIcon,
  ScissorsIcon,
  CakeIcon,
  BanknotesIcon,
  ShoppingCartIcon,
  HomeIcon,



} from '@heroicons/react/20/solid'
import nakupImg from './assets/nakup.jpg'
import satnikImg from './assets/satnik.jpg'

const texty = {
  satnik: {
    nadpis: 'Revize šatníku',
    popis:
      'Stanu se vášim osobním módním poradcem připraveným vám pomoci objevit skvosty ve vašem šatníku a vytvořit stylové kombinace, které budou odrážet váš jedinečný osobní styl. S detailním pohledem na váš šatník vám poskytnu odborné rady ohledně barev, střihů a doplňků, abyste se cítili sebevědomí a šik v každé příležitosti. Připravte se na módní transformaci, kde každý kousek ve vašem šatníku bude mít své nezbytné místo a bude plně v souladu s vaším individuálním vkusem.',
    body: [
      {
        ikona: MagnifyingGlassIcon,
        heslo:
          'Postupně si projdeme celý váš šatník a spolu rozhodneme o tom co ponechat, pozměnit nebo doplnit. ',
      },
      {
        ikona: ScissorsIcon,
        heslo:
          'Pomůžu s úpravou střihu, velikosti nebo opravou oblečení, které stojí za to zachránit.',
      },
      {
        ikona: CakeIcon,
        heslo:
          'Připravíme kombinace oblečení pro různé příležitosti a události.',
      },
    ],
  },
  nakupovani: {
    nadpis: 'Společné nakupování',
    popis:
      'Provedu vás fascinujícím světem trendů a stylů při společných nákupních dobrodružstvích. Naše setkání nebude jen obyčejný nákup, ale skvělá příležitost k tomu, abychom společně objevili nové inspirace, zdokonalili váš osobní styl a doplnili váš šatník o skvostné kousky. Sprostředkuju vám zábavný, časově efektivní a cenově dostupný nákup. Při nakupováni v Second Hand obchodech se přesvědčíme, že za kvalitní oblečení nemusíte utratit celou výplatu.',
    body: [
      {
        ikona: BanknotesIcon,
        heslo:
          'Spolu vybereme ty správne obchody s ohledem na váš styl a finanční možnosti.',
      },
      {
        ikona: ShoppingCartIcon,
        heslo:
          'Navštívíme vybrané obchody a najdeme tam ty správné kousky oblečení na danou příležitost.',
      },
      {
        ikona: HomeIcon,
        heslo:
          'Doplníme váš šatník, aby ste už nikdy neměli pocit, že "nemáte co na sebe".',
      },
    ],
  },
}




export default function Card({satnik}) {

  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8">
            <div className="lg:max-w-lg">
              <p className=" lg:text-6xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {satnik ? texty.satnik.nadpis : texty.nakupovani.nadpis}
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                {satnik ? texty.satnik.popis : texty.nakupovani.popis}
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {satnik
                  ? texty.satnik.body.map((bod) => (
                      <div key={crypto.randomUUID()} className="relative pl-9">
                        <dt className="inline font-semibold text-gray-900">
                          <bod.ikona
                            className="absolute left-1 top-1 h-5 w-5 text-[#cf0029]"
                            aria-hidden="true"
                          />
                        </dt>{' '}
                        <dd className="inline">{bod.heslo}</dd>
                      </div>
                    ))
                  : texty.nakupovani.body.map((bod) => (
                      <div key={crypto.randomUUID()} className="relative pl-9">
                        <dt className="inline font-semibold text-gray-900">
                          <bod.ikona
                            className="absolute left-1 top-1 h-5 w-5 text-[#cf0029]"
                            aria-hidden="true"
                          />
                        </dt>{' '}
                        <dd className="inline">{bod.heslo}</dd>
                      </div>
                    ))}
              </dl>
            </div>
          </div>
          <img
            src={satnik ? satnikImg : nakupImg}
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  )
}
