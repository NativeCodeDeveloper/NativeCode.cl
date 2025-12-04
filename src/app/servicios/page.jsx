import { Check, MoveRight, PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Pricing1() {
  return (
    <div className="relative isolate bg-transparent px-6 py-24 sm:py-32 lg:px-8 rounded-3xl">
      <div aria-hidden="true" className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl">
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="mx-auto aspect-1155/678 w-288.75 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-20"
        />
      </div>
      <div className="container mx-auto">
        <div className="flex text-center justify-center items-center gap-4 flex-col">
          <Badge className="text-base px-4 py-2">Planes y precios</Badge>
          <div className="flex gap-2 flex-col">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tighter w-full text-center font-regular whitespace-nowrap">
              Elige el plan ideal para tu negocio
            </h2>
            <p className="mt-8 text-lg leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
              Tenemos tres opciones paralelas que se adaptan a tu proyecto: desde una página estática editable, pasando por un sitio dinámico multiplataforma con agendamiento, hasta una aplicación web a medida por módulos.
            </p>
          </div>
          <div className="grid pt-20 text-left grid-cols-1 lg:grid-cols-3 w-full gap-8">
            
            {/* Página Web Profesional */}
            <Card className="w-full rounded-xl flex flex-col bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border-gray-700/50 hover:border-indigo-500/50 transition-all duration-300">
              <CardHeader>
                <CardTitle>
                  <span className="flex flex-row gap-4 items-center font-normal text-white">
                    Página Web Profesional
                  </span>
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Tu presencia digital como nunca antes.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-col gap-8 justify-start">
                  <p className="flex flex-row items-center gap-2 text-xl">
                    <span className="text-4xl text-white font-bold">Desde $99.000</span>
                    <span className="text-sm text-gray-400">
                      + IVA
                    </span>
                  </p>
                  <div className="flex flex-col gap-4 justify-start">
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-indigo-400" />
                      <div className="flex flex-col">
                        <p className="text-white">Autoadministrable</p>
                        <p className="text-gray-400 text-sm">
                          Actualiza tu contenido sin depender de terceros
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-indigo-400" />
                      <div className="flex flex-col">
                        <p className="text-white">Hosting y dominio incluidos</p>
                        <p className="text-gray-400 text-sm">
                          Lista para funcionar desde el primer día
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-indigo-400" />
                      <div className="flex flex-col">
                        <p className="text-white">Hasta 4 secciones personalizables</p>
                        <p className="text-gray-400 text-sm">
                          Servicios, productos o portafolio
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-indigo-400" />
                      <div className="flex flex-col">
                        <p className="text-white">Optimizado para conversión</p>
                        <p className="text-gray-400 text-sm">
                          Diseño optimizado para confianza y conversión
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-indigo-400" />
                      <div className="flex flex-col">
                        <p className="text-white">100% responsive</p>
                        <p className="text-gray-400 text-sm">
                          Computador, tablet y smartphone
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <div className="p-6 pt-0 mt-auto">
                <div className="relative inline-flex items-center justify-center w-full group">
                  <div className="absolute inset-0 duration-1000 opacity-60 transition-all bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-400 rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200"></div>
                  <a
                    href="/comprar"
                    className="w-full group relative inline-flex items-center justify-center text-base rounded-xl bg-gray-900 px-8 py-3 font-semibold text-white transition-all duration-200 hover:bg-gray-800 hover:shadow-lg hover:-translate-y-0.5 hover:shadow-gray-600/30"
                  >
                    Contratar
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 10 10"
                      height="10"
                      width="10"
                      fill="none"
                      className="mt-0.5 ml-2 -mr-1 stroke-white stroke-2"
                    >
                      <path d="M0 5h7" className="transition opacity-0 group-hover:opacity-100"></path>
                      <path d="M1 1l4 4-4 4" className="transition group-hover:translate-x-[3px]"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </Card>

            {/* Multiplataforma Web Avanzada */}
            <Card className="w-full shadow-2xl rounded-xl flex flex-col bg-gradient-to-br from-indigo-900/60 to-purple-900/60 backdrop-blur-sm border-2 border-indigo-500/50 hover:border-indigo-400 transition-all duration-300 transform hover:scale-105">
              <CardHeader>
                <CardTitle>
                  <span className="flex flex-row gap-4 items-center font-normal text-white">
                    Multiplataforma Web Avanzada
                  </span>
                </CardTitle>
                <CardDescription className="text-gray-200">
                  Una solución completa para digitalizar tu negocio y optimizar tu tiempo.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-col gap-8 justify-start">
                  <p className="flex flex-row items-center gap-2 text-xl">
                    <span className="text-4xl text-white font-bold">Desde $249.990</span>
                    <span className="text-sm text-gray-300">
                      + IVA
                    </span>
                  </p>
                  <div className="flex flex-col gap-4 justify-start">
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-cyan-400" />
                      <div className="flex flex-col">
                        <p className="text-white">Integración con Google API</p>
                        <p className="text-gray-300 text-sm">
                          Agenda y correos sincronizados
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-cyan-400" />
                      <div className="flex flex-col">
                        <p className="text-white">Agendamiento en línea</p>
                        <p className="text-gray-300 text-sm">
                          Reservas fáciles desde tu web
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-cyan-400" />
                      <div className="flex flex-col">
                        <p className="text-white">Correos automáticos</p>
                        <p className="text-gray-300 text-sm">
                          Confirmación automática de citas
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-cyan-400" />
                      <div className="flex flex-col">
                        <p className="text-white">Base de datos en la nube</p>
                        <p className="text-gray-300 text-sm">
                          Segura y accesible
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-cyan-400" />
                      <div className="flex flex-col">
                        <p className="text-white">Autenticación profesional</p>
                        <p className="text-gray-300 text-sm">
                          Seguridad de usuarios garantizada
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-cyan-400" />
                      <div className="flex flex-col">
                        <p className="text-white">Panel autoadministrable</p>
                        <p className="text-gray-300 text-sm">
                          Gestiona contenido y configuraciones
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <div className="p-6 pt-0 mt-auto">
                <div className="relative inline-flex items-center justify-center w-full group">
                  <div className="absolute inset-0 duration-1000 opacity-80 transition-all bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200"></div>
                  <a
                    href="/comprar"
                    className="w-full group relative inline-flex items-center justify-center text-base rounded-xl bg-indigo-600 px-8 py-3 font-semibold text-white transition-all duration-200 hover:bg-indigo-700 hover:shadow-lg hover:-translate-y-0.5 hover:shadow-indigo-600/50"
                  >
                    Contratar
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 10 10"
                      height="10"
                      width="10"
                      fill="none"
                      className="mt-0.5 ml-2 -mr-1 stroke-white stroke-2"
                    >
                      <path d="M0 5h7" className="transition opacity-0 group-hover:opacity-100"></path>
                      <path d="M1 1l4 4-4 4" className="transition group-hover:translate-x-[3px]"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </Card>

            {/* E-Commerce Profesional */}
            <Card className="w-full rounded-xl flex flex-col bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border-gray-700/50 hover:border-indigo-500/50 transition-all duration-300">
              <CardHeader>
                <CardTitle>
                  <span className="flex flex-row gap-4 items-center font-normal text-white">
                    E-Commerce Profesional
                  </span>
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Convierte tu negocio en una tienda online moderna, segura y fácil de administrar.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-col gap-8 justify-start">
                  <p className="flex flex-row items-center gap-2 text-xl">
                    <span className="text-4xl text-white font-bold">Desde $350.000</span>
                    <span className="text-sm text-gray-400">
                      + IVA
                    </span>
                  </p>
                  <div className="flex flex-col gap-4 justify-start">
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-indigo-400" />
                      <div className="flex flex-col">
                        <p className="text-white">Pasarela de pago integrada</p>
                        <p className="text-gray-400 text-sm">
                          Webpay, MercadoPago, Stripe
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-indigo-400" />
                      <div className="flex flex-col">
                        <p className="text-white">Carrito de compras dinámico</p>
                        <p className="text-gray-400 text-sm">
                          Experiencia de compra fluida
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-indigo-400" />
                      <div className="flex flex-col">
                        <p className="text-white">Panel autoadministrable</p>
                        <p className="text-gray-400 text-sm">
                          Precios, imágenes y descripciones
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-indigo-400" />
                      <div className="flex flex-col">
                        <p className="text-white">Base de datos en la nube</p>
                        <p className="text-gray-400 text-sm">
                          Seguridad y disponibilidad
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-indigo-400" />
                      <div className="flex flex-col">
                        <p className="text-white">Optimización SEO</p>
                        <p className="text-gray-400 text-sm">
                          Carga rápida y posicionamiento
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <div className="p-6 pt-0 mt-auto">
                <div className="relative inline-flex items-center justify-center w-full group">
                  <div className="absolute inset-0 duration-1000 opacity-60 transition-all bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-400 rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200"></div>
                  <a
                    href="/comprar"
                    className="w-full group relative inline-flex items-center justify-center text-base rounded-xl bg-gray-900 px-8 py-3 font-semibold text-white transition-all duration-200 hover:bg-gray-800 hover:shadow-lg hover:-translate-y-0.5 hover:shadow-gray-600/30"
                  >
                    Solicitar cotización
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 10 10"
                      height="10"
                      width="10"
                      fill="none"
                      className="mt-0.5 ml-2 -mr-1 stroke-white stroke-2"
                    >
                      <path d="M0 5h7" className="transition opacity-0 group-hover:opacity-100"></path>
                      <path d="M1 1l4 4-4 4" className="transition group-hover:translate-x-[3px]"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
