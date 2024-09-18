import {
  Aperture,
  ArrowRight,
  AtSign,
  Calendar,
  MapPin,
  Plus,
  Settings2,
  UserRoundPlus,
  X,
} from 'lucide-react'
import { FormEvent, useState } from 'react'

const E_MAILS_FRIENDS = [
  { email: 'brenno@plann.er' },
  { email: 'kau@plann.er' },
  { email: 'milena@plann.er' },
  { email: 'rayna@plann.er' },
  { email: 'maribele@microsoftdabaiha.com.' },
]

export function App() {
  const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false)
  const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false)
  const [emailToInvite, setEmailToInvite] = useState([
    'brenno@plann.er',
    'kau@PlaneLanding.er',
  ])

  function openGuestsInput() {
    setIsGuestsInputOpen(true)
  }

  function closeGuestsInput() {
    setIsGuestsInputOpen(false)
  }

  function openGuestsModal() {
    setIsGuestsModalOpen(true)
  }

  function closeGuestsModal() {
    setIsGuestsModalOpen(false)
  }

  function addNewEmailInvalidate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const data = new FormData(event.currentTarget)
    const email = data.get('email')?.toString()

    // valida se o email esta em branco
    if (!email) {
      return
    }

    // valida se o email ja existe
    if (emailToInvite.includes(email)) {
      return
    }

    // adiciona um novo email a lista de emails cadastrados
    setEmailToInvite([...emailToInvite, email])

    // reseta formulário
    event.currentTarget.reset()
  }

  function removeEmailFrominvites(emailToRemove: string) {
    const newEmailList = emailToInvite.filter(email => email !== emailToRemove)

    setEmailToInvite(newEmailList)
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
              <button
                onClick={openGuestsModal}
                type="button"
                className="flex items-center gap-2 flex-1 text-zinc-400 hover:text-zinc-200"
              >
                <UserRoundPlus className="size-5 " />
                <span className="text-lg flex-1 text-left">
                  Quem estará na viagem?
                </span>
                {/* <input
                  type="text"
                  placeholder="Quem estará na viagem?"
                  className="bg-transparent text-lg placeholder-zinc-400 outline-none focus:border-b border-lime-300"
                /> */}
              </button>

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

      {isGuestsModalOpen && (
        <div className="fixed inset-0 bg-black/95 flex items-center justify-center">
          <div className="w-[640px] rounded-xl py-5 px-6 shadow-md shadow-zinc-900 bg-zinc-900">
            <section className="space-y-2">
              <div className="flex items-center justify-between">
                <h2 className="font-semibold text-lg">Selecionar convidados</h2>
                <button
                  onClick={closeGuestsModal}
                  type="button"
                  className="bg-transparent p-1 rounded-lg hover:bg-zinc-800 active:scale-95"
                >
                  <X />
                </button>
              </div>
              <p className="text-sm text-zinc-400">
                Os convidados irão receber e-mails para confirmar a participação
                na viagem.
              </p>
            </section>

            <section className="flex flex-wrap gap-2 pt-4">
              {emailToInvite.map(email => {
                return (
                  <div
                    key={email}
                    className="py-1.5 px-2.5 rounded-md bg-zinc-800 flex items-center gap-2"
                  >
                    <span className="text-zinc-300">{email}</span>
                    <button
                      type="button"
                      onClick={() => removeEmailFrominvites(email)}
                    >
                      <X className="size-5 text-zinc-400 rounded hover:bg-zinc-900 active:brightness-75" />
                    </button>
                  </div>
                )
              })}
            </section>

            <div className="w-full my-4 h-px bg-zinc-800" />

            <form
              onSubmit={addNewEmailInvalidate}
              className="p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2"
            >
              <div className="px-2 flex items-center flex-1 gap-2">
                <AtSign className="text-zinc-400 size-5" />

                <input
                  type="email"
                  name="email"
                  placeholder="Digite o e-mail do convidado"
                  className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1 focus:border-b border-lime-300"
                />
              </div>

              <button
                type="submit"
                className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center justify-center gap-2 hover:brightness-75 active:scale-95"
              >
                Convidar
                <Plus className="size-5" />
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
