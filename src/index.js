import React from "react"
import ReactDOM from "react-dom"
import {
  BrowserRouter as Router,
  Route,
  Switch as Thanos,
  Redirect
} from "react-router-dom"
import Navbar from "./components/Navbar"

const Home = props => {
  return (
    <div className="content">
      <h1>Hola a todos, es el home</h1>
    </div>
  )
}

const About = props => {
  return (
    <div>
      <h1>Acerca de</h1>
      <p>
        Nuestra misión es Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Aperiam optio repellat nobis cupiditate eligendi, culpa sit
        explicabo cumque quis voluptatem laboriosam, excepturi facere ad libero
        amet harum? Qui, cum laborum!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia tempore
        illum accusamus fugit dolore ad modi qui, deleniti sequi in consequatur
        ducimus molestias sed omnis quo dolor accusantium. Vitae, veniam.
      </p>
      <p>
        Reprehenderit minus recusandae ullam molestiae a reiciendis cum. Ipsa
        laboriosam facere nobis ea porro et suscipit. Sed voluptas numquam
        doloribus nulla autem id. Repudiandae iusto quasi laudantium est! Sit,
        voluptate.
      </p>
      <p>
        Voluptate optio quibusdam dolorum, qui accusamus soluta laborum officia
        laudantium voluptates dolor est quas voluptatum maxime doloribus
        nesciunt in harum ullam sed quae ab eligendi. Hic aut sint quod quia.
      </p>
      <p id="olakease">
        Quasi perferendis obcaecati eveniet, quas, incidunt aliquid deserunt ut
        enim nostrum libero cupiditate, quam quibusdam ad necessitatibus?
        Consequuntur optio voluptates sit, dicta sapiente doloremque ratione
        aliquid vitae, minus, earum rerum.
      </p>
      <p>
        Ipsa quos vitae debitis ut ipsum culpa quia. Libero beatae in
        doloremque, illum ratione ducimus pariatur commodi nobis amet velit
        provident impedit eos incidunt? Praesentium porro architecto nostrum
        ducimus illum.
      </p>
    </div>
  )
}

const Bio = props => {
  return (
    <div className="content">
      <h1>Bio</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
        totam, iusto sunt ipsa minus provident laudantium? Voluptatum, quisquam
        perspiciatis, amet, perferendis nostrum eius voluptate illo et quidem
        impedit debitis iure. Animi, cupiditate? Sint dolore laboriosam adipisci
        incidunt temporibus reiciendis repellat id. Nostrum, iusto veniam. Animi
        et ducimus quasi, perferendis perspiciatis nesciunt quod vitae cum fugit
        beatae porro rem molestiae commodi! Adipisci eaque minus suscipit
        accusantium culpa, corrupti, deleniti minima neque laborum velit,
        numquam voluptates soluta! Obcaecati, at saepe culpa laboriosam
        distinctio labore, tempore nihil ex qui ea expedita. Enim, aliquam!
        Dolore temporibus ipsam ex voluptas modi quaerat provident fuga
        reiciendis aliquid sunt sit fugiat, impedit esse vitae quod dolor saepe
        pariatur beatae id laborum, ad explicabo nisi iusto? Maiores, odio?
        Fugiat odio, totam repellendus harum sed omnis perspiciatis eius ipsam
        quos eaque praesentium numquam vitae sit doloribus iusto quaerat porro
        blanditiis itaque aperiam fugit ea aspernatur, asperiores quasi ad.
        Perferendis. Ex doloribus totam atque nobis iure aut laborum culpa
        eveniet illo ea cum vero dolores voluptatum adipisci, repellat fugit
        omnis reiciendis eligendi! Esse reprehenderit temporibus quasi quisquam,
        voluptas dicta in. Praesentium recusandae repudiandae officiis
        voluptatum laboriosam ipsum, exercitationem reiciendis. Id minus odio
        aspernatur quasi corrupti in inventore repellendus! Neque iste at ut
        libero, odit est nesciunt quaerat consequatur obcaecati natus. Voluptas
        fuga, molestiae obcaecati possimus consequuntur beatae, nihil excepturi
        eligendi, consequatur quia itaque aspernatur dolor. Assumenda animi
        dolores veritatis minus magnam exercitationem provident sed deleniti.
        Ipsam perferendis autem corrupti animi? Dolorem amet saepe distinctio
        eveniet laboriosam? Cumque, explicabo incidunt? Ab velit adipisci nisi
        consequatur provident, totam magnam saepe iure voluptate dolores,
        veritatis ipsam enim fuga atque quos corporis sequi perspiciatis. Alias
        doloribus eaque distinctio? Tempora delectus minus consectetur. Eius
        magnam quae ut doloribus quis quia porro, veritatis molestias voluptatem
        itaque quo magni iure cum et beatae maiores asperiores odit
        exercitationem. Consequuntur beatae consectetur quos magni repellat,
        fugit explicabo at qui nam facere! Nostrum veritatis ea animi vero rerum
        officia possimus fugit eaque amet. Magni quos fugit esse nemo
        exercitationem assumenda? Iste, fugiat harum sit porro voluptatibus nam
        odit necessitatibus! At, quis minus maiores, dignissimos possimus
        officiis recusandae beatae, quia debitis accusantium esse vitae alias
        sapiente quod? Neque, voluptas eum! Quo! Minus, fugit iusto officia
        accusantium maiores itaque quia quos cupiditate sit voluptas atque
        mollitia doloribus odit facilis. Soluta quos ratione aperiam facilis
        numquam, placeat incidunt nisi ea consequuntur laboriosam ullam? Rem
        doloremque optio, voluptatem et in ipsa, quis beatae fugit fugiat ipsum
        quod eius modi eligendi voluptatibus laborum consequatur magnam sit
        reprehenderit dolorem consectetur veritatis laudantium porro natus.
        Quod, nisi. Sapiente laborum labore non nobis nesciunt magni consectetur
        ex cum reiciendis. Mollitia suscipit quod, architecto deserunt sequi
        dolore soluta quasi velit ipsa tempora fugit magnam aspernatur
        reiciendis, at cupiditate ullam. Tenetur laborum minima, eum
        voluptatibus et doloremque excepturi quibusdam mollitia explicabo,
        pariatur ullam praesentium accusantium. Molestiae error ipsam beatae
        nihil non, omnis, consequatur accusantium maiores minus natus laborum
        odit voluptates. Alias, ex mollitia dolores voluptas fuga sit doloremque
        dolorum eligendi? Laudantium natus provident tempore, esse quos atque
        omnis, sequi animi molestiae voluptatibus recusandae distinctio quasi
        dicta expedita. Voluptates, officia doloremque! Magni consectetur
        maiores temporibus ducimus velit dolor deleniti porro, culpa maxime
        accusantium, nam fugit corporis doloremque ut, nemo reprehenderit.
        Pariatur delectus, non doloremque eveniet quae alias error enim ea
        laborum? Minus inventore esse repellat dolorem suscipit eligendi
        repellendus eum asperiores autem natus placeat expedita reiciendis, nisi
        doloremque maxime animi. Ex totam dicta non atque eveniet rerum numquam,
        sapiente id omnis? Doloribus maiores voluptate rem? Laborum beatae
        itaque repudiandae, accusamus nisi suscipit veniam rerum, unde molestiae
        cumque magnam nulla qui omnis ipsa et, corrupti corporis fuga? Excepturi
        ut voluptatem dolorum nesciunt. Ipsa quisquam illo aut magni? Excepturi
        id eligendi distinctio eos at ea veniam quae odit quo, fuga temporibus
        totam nulla? Magni laudantium culpa natus quaerat recusandae nemo neque,
        quae nam. Perferendis, suscipit autem error quod, magnam eum est iusto
        ex laboriosam illo repellendus tempore ea, eos officia quia praesentium?
        Iure error culpa ullam fuga eum, a corporis voluptates ea sed. Eum et
        earum eos nemo reprehenderit! Quibusdam expedita explicabo unde
        laudantium! Quibusdam natus, itaque architecto pariatur ex a ab quod
        quam labore ea! Distinctio, perspiciatis facere adipisci quos provident
        officia? Exercitationem consequatur necessitatibus quo delectus fugit
        sed itaque quidem doloremque quia sapiente temporibus quaerat magni
        voluptatum, eius, vel laboriosam nesciunt minus tempora dicta voluptate
        odio cumque veniam aspernatur? Cumque, in! Voluptatem explicabo quaerat
        doloremque consequatur eveniet labore, animi velit. Nobis iure maxime ex
        deserunt expedita cupiditate qui praesentium vitae voluptate, eum unde
        hic corporis officia corrupti? Dicta corrupti quas enim. Vitae,
        consequuntur error sapiente repellat quis perspiciatis fuga rerum
        delectus, blanditiis id odio quia dolore quas neque voluptas? Aliquam
        minus error, blanditiis doloremque sapiente et aut quae libero eos?
        Officia. Dolor quae possimus aperiam excepturi modi vitae consequuntur
        quaerat numquam distinctio, itaque ullam. Asperiores eligendi ab
        voluptatem sapiente libero voluptates officiis? Facilis autem natus
        vitae modi commodi, pariatur in illo! Saepe, tempore voluptate ullam
        quas, delectus vitae, sit ut soluta dolores perspiciatis necessitatibus.
        Repellendus accusamus facilis nisi ea cupiditate vitae, consequatur
        error explicabo atque neque at provident ipsum consectetur nihil.
        Exercitationem, cum quod! Aperiam officia temporibus laborum dicta!
        Molestias nobis odit illum quia commodi nulla corrupti sint ullam
        delectus accusamus nihil iste eos ducimus dolore earum pariatur, vero
        molestiae beatae. Minus ullam reprehenderit debitis voluptate, aut
        magnam veritatis quos sunt nesciunt dolores odit iusto voluptates porro
        saepe. Perferendis dolore, nulla neque tenetur laborum adipisci quo ex
        distinctio? Provident, distinctio sed? Illum quam suscipit, pariatur
        quis repudiandae voluptate quae modi nisi libero ipsum nulla commodi
        soluta ipsam consequuntur inventore possimus incidunt distinctio,
        voluptates aut delectus fuga veniam eveniet excepturi. Unde, qui.
        Incidunt impedit reprehenderit maxime illo temporibus ratione qui
        adipisci porro sequi natus, optio omnis, in ad aut nemo dolore non amet
        quos sunt eos cumque suscipit. Nesciunt vel laborum eum? Odio, eum
        impedit ea nulla at ipsam asperiores repellat, amet excepturi voluptatum
        commodi iusto voluptate soluta porro esse, maiores sunt dolor possimus!
        Commodi iste quis dolorum soluta itaque dolores. Odio. Perspiciatis est
        architecto vitae aperiam sequi cupiditate fuga, cumque obcaecati fugiat
        tempore dicta laborum facilis unde quo possimus exercitationem porro
        pariatur eos provident? Odit, sed et similique quas voluptates ratione.
        Esse corrupti repudiandae dolor, quis obcaecati laborum dolores
        dignissimos tempora. Ipsam neque ut, qui blanditiis facere pariatur.
        Illo accusamus ex officiis, eaque quam maxime iure, ipsam fugiat
        molestiae distinctio omnis? Aliquam eius recusandae debitis cumque
        laudantium? A odit, voluptatum error maxime culpa ea soluta eius ipsum
        placeat harum porro voluptatem laborum, qui sequi voluptates animi
        obcaecati libero fuga adipisci blanditiis. Facere quos molestias,
        dolorum iusto incidunt dignissimos maiores necessitatibus a minima
        repellat temporibus provident sed dolores fuga eius rem, eligendi
        impedit quisquam deleniti voluptates veniam repudiandae! Quis blanditiis
        hic placeat! Debitis non pariatur deserunt aliquid corporis deleniti
        sunt assumenda explicabo, minima veritatis quidem fuga laborum eveniet
        ipsa aspernatur autem et odit sequi voluptatum libero in cupiditate
        dignissimos eaque. Modi, quo. Eligendi corporis dicta beatae possimus
        voluptatem non magnam eveniet hic distinctio, cupiditate sint, a velit
        deserunt provident omnis nam voluptatibus atque dolor impedit! Sit ea
        sed velit fugit aspernatur eos. Alias ut odit impedit enim dignissimos
        animi quos natus cupiditate labore sequi excepturi est qui quisquam
        libero, quas ducimus repellendus quibusdam placeat modi provident
        laudantium corporis culpa blanditiis. Recusandae, vel. At aliquam
        voluptates ab aliquid unde, voluptas exercitationem cum numquam velit
        quisquam blanditiis quos quis fuga reiciendis! Eius amet doloremque
        porro quis nostrum sit perspiciatis itaque, sed eveniet. Repudiandae,
        mollitia? Quas, culpa aut alias blanditiis dolor consectetur amet ad sed
        voluptates? Veritatis tempore accusantium velit esse cumque. Corrupti
        quo quos, repellat pariatur dolorum autem cum veritatis aliquam beatae.
        Dolorem, repellendus? Eaque deleniti, amet quos sapiente ratione quae
        consequuntur doloremque quas explicabo provident consectetur temporibus
        enim iure culpa, nam recusandae nemo adipisci delectus accusamus
        blanditiis hic labore repellendus dolorem. Cum, dignissimos. Consectetur
        debitis totam officiis, architecto inventore illum sequi, pariatur
        magnam natus animi aliquid nulla! Dicta delectus reiciendis voluptatibus
        aliquam veniam, vero odit a nobis labore, aspernatur, eum cum rem
        fugiat. Iste dicta voluptate accusantium cumque ipsum, molestiae quis
        autem consequatur fuga blanditiis impedit sequi reiciendis accusamus
        reprehenderit nemo libero est quas ullam voluptates. Sit tenetur ab ea
        at. Repudiandae, illo. Aut magnam assumenda eligendi nam omnis quis iure
        sed dignissimos eum perferendis, iusto sit fuga explicabo nulla illum
        eveniet, ea cumque eius exercitationem sunt a? Culpa recusandae est rem
        mollitia? Quos rem ducimus optio repellat vitae nisi quae minima autem,
        magni repellendus reprehenderit modi ut explicabo quo saepe error nemo
        tempore molestias, tenetur corporis veniam necessitatibus dicta in. Non,
        tempore. Reiciendis placeat, minima quibusdam eveniet ipsam
        reprehenderit neque sed accusantium quo sequi molestias, veniam suscipit
        debitis odio minus veritatis perspiciatis est beatae quidem vitae porro
        iusto omnis recusandae. Ex, quos! Dolorum sed inventore quis quaerat
        sapiente eum quae fuga quod dicta rem, molestiae natus. Praesentium
        pariatur cum enim. Saepe pariatur est, sint nulla necessitatibus
        commodi. Culpa repellendus eos repudiandae error. Quidem iste sint ipsam
        culpa commodi, expedita, corporis voluptatibus amet cum voluptas dolor.
        Et molestias accusamus quam maxime sequi, aliquid voluptates obcaecati,
        omnis commodi similique eligendi cum laboriosam, laudantium odio.
      </p>
    </div>
  )
}
const Contact = props => {
  return (
    <div className="content">
      <h1>Contacto</h1>
      <form action="">
        <div className="field">
          <label className="label">Nombre</label>
          <div className="control">
            <input
              type="text"
              className="input"
              name="name"
              placeholder="Pon aquí tu nombre"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Correo</label>
          <div className="control">
            <input
              type="email"
              className="input"
              name="name"
              placeholder="tu correo de contacto"
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Correo</label>
          <div className="control">
            <textarea
              class="textarea"
              placeholder="¿En que puedo ayudarte?"
              name="message"
            />
          </div>
        </div>

        <button className="button is-info">Enviar</button>
      </form>
    </div>
  )
}

// RETO:
// - Bio
// - Contacto
// Tip: creative-tim.com

ReactDOM.render(
  <Router>
    <Navbar />
    <Thanos>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route
        path="/biografia-sentida-sentimental-y-sobervia-yo-expuesto"
        component={Bio}
      />
      <Redirect
        from="/bio"
        to="/biografia-sentida-sentimental-y-sobervia-yo-expuesto"
      />
      <Route path="/contact" component={Contact} />
      <Route>
        <div className="content has-text-centered">
          <h1>404</h1>
          <p>No se encontró</p>
        </div>
      </Route>
    </Thanos>
  </Router>,

  document.getElementById("bulmatron")
)
