import {
  Aperture,
  ArrowRight,
  Calendar,
  MapPin,
  Settings2,
  UserRoundPlus,
} from 'lucide-react'
import { useState } from 'react'

export function App() {
  const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false)

  function openGuestsInput() {
    setIsGuestsInputOpen(true)
  }

  function closeGuestsInput() {
    setIsGuestsInputOpen(false)
  }

  return (
    <div className="h-screen flex items-center justify-center">
      <section className="max-w-3xl w-full px-6 text-center space-y-10">
        <div className="flex items-center justify-center gap-2">
          <Aperture className="h-10 w-10 text-lime-500 animate-spin" />
          <h1 className="text-6xl font-bold">Plann.er</h1>
        </div>

        <p className="text-zinc-300 text-lg">
          Convide seus amigos e planije sua proxima viagem!
        </p>

        <section id="inputs" className="space-y-4">
          <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-xl shadow-zinc-950">
            <div className="flex items-center gap-2 flex-1">
              <MapPin className="size-5 text-zinc-400" />
              <input
                disabled={isGuestsInputOpen}
                type="text"
                placeholder="Para onde você vai?"
                className="bg-transparent text-lg placeholder-zinc-400 outline-none focus:border-b border-lime-300"
              />
            </div>

            <div className="flex items-center gap-2">
              <Calendar className="size-5 text-zinc-400" />
              <input
                disabled={isGuestsInputOpen}
                type="text"
                placeholder="Quando?"
                className="bg-transparent text-lg placeholder-zinc-400 outline-none focus:border-b border-lime-300"
              />
            </div>

            <section className="flex items-center gap-3 min-w-56">
              <div className="w-px h-6 bg-zinc-700" />

              {isGuestsInputOpen ? (
                <button
                  onClick={closeGuestsInput}
                  type="button"
                  className="w-full bg-zinc-700 text-zinc-200 rounded-lg px-5 py-2 font-medium flex items-center justify-center gap-2 hover:brightness-75 active:scale-95"
                >
                  Alterar local e data
                  <Settings2 className="size-5" />
                </button>
              ) : (
                <button
                  onClick={openGuestsInput}
                  type="button"
                  className="w-full bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center justify-center gap-2 hover:brightness-75 active:scale-95"
                >
                  Continuar
                  <ArrowRight className="size-5" />
                </button>
              )}
            </section>
          </div>

          {isGuestsInputOpen && (
            <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-xl shadow-zinc-950">
              <div className="flex items-center gap-2 flex-1">
                <UserRoundPlus className="size-5 text-zinc-400" />
                <input
                  type="text"
                  placeholder="Quem estará na viagem?"
                  className="bg-transparent text-lg placeholder-zinc-400 outline-none focus:border-b border-lime-300"
                />
              </div>

              <section className="flex items-center gap-3 min-w-56">
                <div className="w-px h-6 bg-zinc-700" />

                <button
                  type="button"
                  className="w-full bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center justify-center gap-2 hover:brightness-75 active:scale-95"
                >
                  Confimar viagem
                  <ArrowRight className="size-5" />
                </button>
              </section>
            </div>
          )}
        </section>

        <p className="text-sm text-zinc-500">
          Ao planejar sua viagem pela Plann.er você automaticamente concorda{' '}
          <br /> com nossos{' '}
          <a className="text-zinc-300 underline" href="/">
            {' '}
            termos de uso
          </a>{' '}
          e{' '}
          <a className="text-zinc-300 underline" href="/">
            politicas de privacidade.
          </a>
        </p>
      </section>
    </div>
  )
}
