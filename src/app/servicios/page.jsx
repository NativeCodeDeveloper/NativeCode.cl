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
              Elige el plan ideal para tu E-commerce
            </h2>
            <p className="mt-8 text-lg text-center text-gray-300 max-w-3xl mx-auto">
              Desde tiendas online listas para vender, hasta soluciones empresariales escalables con IA y gestión multi-sucursal. Todos nuestros planes incluyen diseño personalizado y tecnología de última generación.
            </p>
          </div>
          <div className="grid pt-20 text-left grid-cols-1 lg:grid-cols-3 w-full gap-8">
            
            {/* E-commerce Lite */}
            <Card className="w-full rounded-xl flex flex-col bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300">
              <CardHeader>
                <CardTitle>
                  <span className="flex flex-row gap-4 items-center font-normal text-white">
                    E-commerce Lite
                  </span>
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Tu tienda online profesional lista para vender desde el día uno.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-col gap-8 justify-start">
                  <p className="flex flex-row items-center gap-2 text-xl">
                    <span className="text-4xl text-white font-bold">$320.000</span>
                    <span className="text-sm text-gray-400">
                      + IVA
                    </span>
                  </p>
                  <div className="flex flex-col gap-4 justify-start">
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-cyan-400" />
                      <div className="flex flex-col">
                        <p className="text-white">Diseño UI/UX personalizado</p>
                        <p className="text-gray-400 text-sm">
                          No plantillas, 100% a medida
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-cyan-400" />
                      <div className="flex flex-col">
                        <p className="text-white">Hosting + Dominio opcional</p>
                        <p className="text-gray-400 text-sm">
                          Correos corporativos ilimitados
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-cyan-400" />
                      <div className="flex flex-col">
                        <p className="text-white">Catálogo completo</p>
                        <p className="text-gray-400 text-sm">
                          Categorías, filtros y galería por producto
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-cyan-400" />
                      <div className="flex flex-col">
                        <p className="text-white">Pasarela MercadoPago</p>
                        <p className="text-gray-400 text-sm">
                          Checkout Pro integrado
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-cyan-400" />
                      <div className="flex flex-col">
                        <p className="text-white">Panel administrador</p>
                        <p className="text-gray-400 text-sm">
                          Productos, categorías y stock manual
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-cyan-400" />
                      <div className="flex flex-col">
                        <p className="text-white">SEO avanzado + WhatsApp</p>
                        <p className="text-gray-400 text-sm">
                          Posicionamiento y contacto directo
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <div className="p-6 pt-0 mt-auto">
                <div className="relative inline-flex items-center justify-center w-full group">
                  <div className="absolute inset-0 duration-1000 opacity-60 transition-all bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200"></div>
                  <a
                    href="/comprar"
                    className="w-full group relative inline-flex items-center justify-center text-base rounded-xl bg-gray-900 px-8 py-3 font-semibold text-white transition-all duration-200 hover:bg-gray-800 hover:shadow-lg hover:-translate-y-0.5 hover:shadow-gray-600/30"
                  >
                    Contratar ahora
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

            {/* E-commerce UltraScale - PLAN DESTACADO EN EL CENTRO */}
            <Card className="w-full shadow-2xl rounded-xl flex flex-col bg-gradient-to-br from-purple-900/60 to-fuchsia-900/60 backdrop-blur-sm border-2 border-fuchsia-500/50 hover:border-fuchsia-400 transition-all duration-300 transform hover:scale-105">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                <Badge className="bg-gradient-to-r from-fuchsia-500 to-purple-500 text-white px-4 py-1 text-sm font-semibold shadow-lg">
                  MÁS POPULAR
                </Badge>
              </div>
              <CardHeader className="pt-8">
                <CardTitle>
                  <span className="flex flex-row gap-4 items-center font-normal text-white">
                    E-commerce UltraScale
                  </span>
                </CardTitle>
                <CardDescription className="text-gray-200">
                  La solución empresarial completa para escalar sin límites.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-col gap-8 justify-start">
                  <p className="flex flex-row items-center gap-2 text-xl">
                    <span className="text-4xl text-white font-bold">$1.370.000</span>
                    <span className="text-sm text-gray-300">
                      + IVA
                    </span>
                  </p>
                  <div className="flex flex-col gap-4 justify-start">
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-fuchsia-400" />
                      <div className="flex flex-col">
                        <p className="text-white font-semibold">Todo lo del Plan ProSuite +</p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-fuchsia-400" />
                      <div className="flex flex-col">
                        <p className="text-white">Servidor exclusivo y dedicado</p>
                        <p className="text-gray-300 text-sm">
                          Alto rendimiento garantizado
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-fuchsia-400" />
                      <div className="flex flex-col">
                        <p className="text-white">Gestión multi-sucursal</p>
                        <p className="text-gray-300 text-sm">
                          Control completo por sucursal
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-fuchsia-400" />
                      <div className="flex flex-col">
                        <p className="text-white">Facturación electrónica + SII</p>
                        <p className="text-gray-300 text-sm">
                          Boletas y facturas automáticas
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-fuchsia-400" />
                      <div className="flex flex-col">
                        <p className="text-white">IA para atención al cliente</p>
                        <p className="text-gray-300 text-sm">
                          Respuestas automáticas inteligentes
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-fuchsia-400" />
                      <div className="flex flex-col">
                        <p className="text-white">Sistema de suscripciones</p>
                        <p className="text-gray-300 text-sm">
                          Pagos recurrentes y renovaciones
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-fuchsia-400" />
                      <div className="flex flex-col">
                        <p className="text-white">Seguridad + monitoreo 24/7</p>
                        <p className="text-gray-300 text-sm">
                          Estadísticas y métricas en tiempo real
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <div className="p-6 pt-0 mt-auto">
                <div className="relative inline-flex items-center justify-center w-full group">
                  <div className="absolute inset-0 duration-1000 opacity-80 transition-all bg-gradient-to-r from-fuchsia-500 via-purple-500 to-pink-500 rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200"></div>
                  <a
                    href="/comprar"
                    className="w-full group relative inline-flex items-center justify-center text-base rounded-xl bg-fuchsia-600 px-8 py-3 font-semibold text-white transition-all duration-200 hover:bg-fuchsia-700 hover:shadow-lg hover:-translate-y-0.5 hover:shadow-fuchsia-600/50"
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

            {/* E-commerce ProSuite */}
            <Card className="w-full rounded-xl flex flex-col bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border-gray-700/50 hover:border-purple-500/50 transition-all duration-300">
              <CardHeader>
                <CardTitle>
                  <span className="flex flex-row gap-4 items-center font-normal text-white">
                    E-commerce ProSuite
                  </span>
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Automatización avanzada para negocios en crecimiento.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-col gap-8 justify-start">
                  <p className="flex flex-row items-center gap-2 text-xl">
                    <span className="text-4xl text-white font-bold">$670.000</span>
                    <span className="text-sm text-gray-400">
                      + IVA
                    </span>
                  </p>
                  <div className="flex flex-col gap-4 justify-start">
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-purple-400" />
                      <div className="flex flex-col">
                        <p className="text-white font-semibold">Todo lo del Plan Lite +</p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-purple-400" />
                      <div className="flex flex-col">
                        <p className="text-white">Inventario automático</p>
                        <p className="text-gray-400 text-sm">
                          Descuento de stock por venta
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-purple-400" />
                      <div className="flex flex-col">
                        <p className="text-white">Notificaciones automáticas</p>
                        <p className="text-gray-400 text-sm">
                          Correos al despachar pedidos
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-purple-400" />
                      <div className="flex flex-col">
                        <p className="text-white">Carritos perdidos</p>
                        <p className="text-gray-400 text-sm">
                          Seguimiento por correo + WhatsApp
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-purple-400" />
                      <div className="flex flex-col">
                        <p className="text-white">Cupones de descuento</p>
                        <p className="text-gray-400 text-sm">
                          Sistema completo de promociones
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-purple-400" />
                      <div className="flex flex-col">
                        <p className="text-white">Múltiples usuarios y roles</p>
                        <p className="text-gray-400 text-sm">
                          Pasarelas múltiples + SEO máximo
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-purple-400" />
                      <div className="flex flex-col">
                        <p className="text-white">Copias de seguridad</p>
                        <p className="text-gray-400 text-sm">
                          Soporte continuo incluido
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <div className="p-6 pt-0 mt-auto">
                <div className="relative inline-flex items-center justify-center w-full group">
                  <div className="absolute inset-0 duration-1000 opacity-60 transition-all bg-gradient-to-r from-purple-500 via-pink-500 to-fuchsia-500 rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200"></div>
                  <a
                    href="/comprar"
                    className="w-full group relative inline-flex items-center justify-center text-base rounded-xl bg-gray-900 px-8 py-3 font-semibold text-white transition-all duration-200 hover:bg-gray-800 hover:shadow-lg hover:-translate-y-0.5 hover:shadow-gray-600/30"
                  >
                    Contratar ahora
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
