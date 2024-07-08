import logoDark from "../../assets/logo-dark.svg"
import sponsor from "../../assets/sponsor.svg"

export function Login() {
  return (
    <div>
      <div>
        <img src={logoDark} alt="logo control finance v2" />
        <span>Domine suas finanças com o Control Finance.</span>
        <img src={sponsor} />
        <span>
          Monitore gastos, crie orçamentos e alcance suas metas financeiras com
          facilidade.
        </span>
      </div>
      <form></form>
    </div>
  )
}
