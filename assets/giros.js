/* Contenido base de ejemplo por giro. Todo es ficticio y sirve solo para demostración. */
(function(){
  const horarioSemana = {
    1:[["09:00","14:00"],["16:00","19:00"]],2:[["09:00","14:00"],["16:00","19:00"]],
    3:[["09:00","14:00"],["16:00","19:00"]],4:[["09:00","14:00"],["16:00","19:00"]],
    5:[["09:00","14:00"]],6:[["09:00","13:00"]]
  };
  const base = {
    ciudad:"Estado de México", direccion:"Calle Ejemplo 123, Centro",
    tel:"55 0000 0000", ig:"ejemplo", fb:"ejemplo", tiktok:"ejemplo",
    horario:horarioSemana, duracion:45
  };
  window.GIROS = {
    nutricion: Object.assign({}, base, {
      giro:"Nutrición", cedula:"Cédula profesional 00000000", titulo:"Licenciada en Nutrición",
      servicios:[
        {nombre:"Primera consulta", detalle:"Historia clínica, mediciones y plan inicial por escrito.", duracion:"60 min", precio:450},
        {nombre:"Consulta de seguimiento", detalle:"Revisión de avances, ajustes al plan y dudas.", duracion:"30 min", precio:300},
        {nombre:"Plan para deportistas", detalle:"Alimentación para entrenar, competir y recuperarte.", duracion:"60 min", precio:550},
        {nombre:"Nutrición en el embarazo", detalle:"Plan por trimestre y seguimiento mensual.", duracion:"45 min", precio:450},
        {nombre:"Consulta en línea", detalle:"Por videollamada. Recibes tu plan en el celular.", duracion:"45 min", precio:350}
      ],
      pasos:[
        {t:"Eliges día y hora", d:"Desde el celular, sin llamar. Te llega la confirmación."},
        {t:"Platicamos y nos medimos", d:"Peso, talla y hábitos reales: a qué hora comes, qué hay en tu casa, cuánto te mueves."},
        {t:"Sales con tu plan", d:"Menús con comida de aquí, lista de súper y tu cita de seguimiento ya agendada."}
      ],
      resenas:[
        {n:"Mariana G.", t:"Me armó un plan con lo que ya como en casa. Por fin no me siento a dieta."},
        {n:"Roberto S.", t:"Agendé desde el celular en un minuto y me llegó el recordatorio. Muy cómodo."},
        {n:"Lucía P.", t:"Me explicó todo con calma y mis análisis mejoraron en tres meses."}
      ],
      faq:[
        {q:"¿Qué llevo a mi primera consulta?", a:"Ropa cómoda y, si los tienes, tus estudios de laboratorio recientes. Si no los tienes, no pasa nada."},
        {q:"¿Hay consulta en línea?", a:"Sí. Por videollamada, con el mismo plan y seguimiento que en el consultorio."},
        {q:"¿Cada cuánto son las citas de seguimiento?", a:"Normalmente cada dos o tres semanas al inicio, y cada mes después."},
        {q:"¿Puedo cambiar mi cita?", a:"Sí, escríbenos por WhatsApp con un día de anticipación."}
      ],
      agenda:{ modalidades:["En el consultorio","En línea"], campos:[] }
    }),
    psicologia: Object.assign({}, base, {
      giro:"Psicología", cedula:"Cédula profesional 00000000", titulo:"Psicóloga clínica",
      servicios:[
        {nombre:"Primera sesión", detalle:"Nos conocemos, hablamos de lo que te trae y definimos cómo trabajar.", duracion:"60 min", precio:600},
        {nombre:"Terapia individual", detalle:"Sesiones semanales para adultos y adolescentes.", duracion:"50 min", precio:550},
        {nombre:"Terapia de pareja", detalle:"Un espacio para escucharse y ponerse de acuerdo.", duracion:"75 min", precio:800},
        {nombre:"Terapia en línea", detalle:"Por videollamada, desde donde te sientas cómodo.", duracion:"50 min", precio:500}
      ],
      pasos:[
        {t:"Agendas tu primera sesión", d:"Eliges día y hora desde el celular. Nadie te va a llamar."},
        {t:"Hablamos sin prisa", d:"Cuentas lo que quieras contar. Esta sesión sirve para conocernos."},
        {t:"Definimos un camino", d:"Acordamos cada cuánto vernos y cómo trabajar, a tu ritmo."}
      ],
      resenas:[
        {n:"Andrea M.", t:"Llegué con miedo de que me juzgaran. Me escucharon con mucho respeto."},
        {n:"Javier R.", t:"Poder agendar desde el celular, sin llamar, me ayudó a dar el primer paso."},
        {n:"Karen L.", t:"Las sesiones en línea me permitieron seguir en terapia aunque me mudé."}
      ],
      faq:[
        {q:"¿Cómo sé si necesito terapia?", a:"Si algo te preocupa, te pesa o no te deja estar bien, es motivo suficiente. No hace falta estar en crisis."},
        {q:"¿Lo que cuento es confidencial?", a:"Sí. Lo que hablas en sesión se queda en la sesión, salvo las excepciones que marca la ley."},
        {q:"¿Cuánto dura el proceso?", a:"Depende de cada persona y de lo que quiera trabajar. Lo vamos revisando juntos."},
        {q:"¿Atienden adolescentes?", a:"Sí, desde los 13 años, con autorización de un adulto responsable."}
      ],
      agenda:{ modalidades:["En el consultorio","En línea"], campos:[] }
    }),
    odontologia: Object.assign({}, base, {
      giro:"Odontología", cedula:"Cédula profesional 00000000", titulo:"Cirujana dentista",
      servicios:[
        {nombre:"Revisión y diagnóstico", detalle:"Valoración completa y plan de tratamiento por escrito.", duracion:"30 min", precio:300},
        {nombre:"Limpieza dental", detalle:"Eliminación de sarro y pulido.", duracion:"45 min", precio:600},
        {nombre:"Resinas", detalle:"Restauración de caries con material del color de tu diente.", duracion:"45 min", precio:700},
        {nombre:"Ortodoncia", detalle:"Valoración y tratamiento con brackets.", duracion:"30 min", precio:500},
        {nombre:"Blanqueamiento", detalle:"Sesión en consultorio.", duracion:"60 min", precio:1800},
        {nombre:"Urgencia dental", detalle:"Dolor, golpe o diente roto. Te atendemos el mismo día.", duracion:"30 min", precio:400}
      ],
      pasos:[
        {t:"Agendas desde el celular", d:"Elige el día y la hora que te acomode."},
        {t:"Te revisamos con calma", d:"Valoramos tu boca y te explicamos qué se necesita y qué no."},
        {t:"Tratamiento con presupuesto claro", d:"Sabes cuánto cuesta cada paso antes de empezar."}
      ],
      resenas:[
        {n:"Patricia V.", t:"Me explicaron cada paso y no sentí nada. Ya no le tengo miedo al dentista."},
        {n:"Luis F.", t:"Me dieron cita el mismo día por un dolor. Muy atentos."},
        {n:"Daniela C.", t:"Mi hijo salió contento de su revisión. Vamos a volver."}
      ],
      faq:[
        {q:"¿Cada cuánto debo ir al dentista?", a:"Una revisión y limpieza cada seis meses es lo habitual. Si tienes molestias, ven antes."},
        {q:"¿Atienden niños?", a:"Sí, con trato paciente y revisión adaptada a su edad."},
        {q:"¿Dan presupuesto antes del tratamiento?", a:"Sí. Te lo entregamos por escrito después de la revisión."},
        {q:"¿Tienen facilidades de pago?", a:"Los tratamientos largos se pueden pagar por etapas."}
      ],
      agenda:{ modalidades:null, campos:[{name:"primera",label:"¿Es tu primera vez con nosotros?",tipo:"select",opciones:["Sí","No"]}] }
    }),
    veterinaria: Object.assign({}, base, {
      giro:"Veterinaria", cedula:"Cédula profesional 00000000", titulo:"Médica veterinaria zootecnista",
      servicios:[
        {nombre:"Consulta general", detalle:"Revisión completa de tu perro o gato.", duracion:"30 min", precio:350},
        {nombre:"Vacunación", detalle:"Esquema completo y registro en la cartilla digital.", duracion:"20 min", precio:300},
        {nombre:"Desparasitación", detalle:"Interna y externa, con recordatorio de la siguiente fecha.", duracion:"20 min", precio:200},
        {nombre:"Baño y corte", detalle:"Para perros y gatos, con cita.", duracion:"90 min", precio:350},
        {nombre:"Cirugía y esterilización", detalle:"Valoración previa y seguimiento.", duracion:"Por cita", precio:1500},
        {nombre:"Urgencias", detalle:"Atención el mismo día. Llama o escribe por WhatsApp.", duracion:"Inmediata", precio:500}
      ],
      pasos:[
        {t:"Agendas desde el celular", d:"Dinos cómo se llama tu mascota y qué necesita."},
        {t:"La atendemos", d:"Revisión, vacunas o lo que haga falta, explicado con claridad."},
        {t:"Todo queda en tu celular", d:"Su cartilla de vacunación y sus recetas, siempre a la mano."}
      ],
      resenas:[
        {n:"Fernanda T.", t:"Ya no busco la cartilla en papel. Veo las vacunas de mi perro en el celular."},
        {n:"Miguel A.", t:"Me llegó el recordatorio de la vacuna justo a tiempo. Muy práctico."},
        {n:"Sandra H.", t:"Atendieron a mi gata de urgencia y me explicaron todo con paciencia."}
      ],
      faq:[
        {q:"¿Puedo ver la cartilla de mi mascota en línea?", a:"Sí. Entras con tu número y ves sus vacunas, desparasitaciones y fechas de la siguiente dosis."},
        {q:"¿Dónde veo las recetas?", a:"En la misma sección, con la fecha y las indicaciones que dio el médico."},
        {q:"¿Atienden urgencias?", a:"Sí. Llama o escribe por WhatsApp y te decimos cómo llegar."},
        {q:"¿Atienden gatos?", a:"Sí, perros y gatos, con un trato tranquilo para cada uno."}
      ],
      agenda:{ modalidades:null, campos:[
        {name:"mascota",label:"Nombre de tu mascota",tipo:"text"},
        {name:"especie",label:"¿Perro o gato?",tipo:"select",opciones:["Perro","Gato","Otro"]}
      ] }
    }),
    abogados: Object.assign({}, base, {
      giro:"Abogados", cedula:"Cédula profesional 00000000", titulo:"Licenciado en Derecho", duracion:45,
      servicios:[
        {nombre:"Consulta inicial", detalle:"Platicamos tu caso, te decimos qué opciones hay y cuánto costaría.", duracion:"45 min", precio:500},
        {nombre:"Asuntos familiares", detalle:"Divorcio, pensión alimenticia, custodia. Desde esta cifra, según el caso.", duracion:"Por caso", precio:3500},
        {nombre:"Testamentos y sucesiones", detalle:"Para dejar todo en orden y evitar pleitos en tu familia.", duracion:"Por trámite", precio:2800},
        {nombre:"Contratos y arrendamientos", detalle:"Redacción y revisión antes de que firmes.", duracion:"Por documento", precio:1200},
        {nombre:"Asesoría laboral", detalle:"Despidos, liquidaciones y finiquitos.", duracion:"Por caso", precio:1500},
        {nombre:"Trámites y regularización", detalle:"Escrituras, juicios de propiedad y otros trámites.", duracion:"Por trámite", precio:2500}
      ],
      pasos:[
        {t:"Agendas tu consulta", d:"Eliges día y hora desde el celular, en persona, por videollamada o por teléfono."},
        {t:"Te explicamos tus opciones", d:"En palabras claras: qué se puede hacer, cuánto tarda y cuánto cuesta."},
        {t:"Decides con la información completa", d:"Si decides seguir, firmamos un acuerdo por escrito con costos y etapas."}
      ],
      resenas:[
        {n:"Carmen R.", t:"Me explicaron mi caso sin tecnicismos y desde el primer día supe cuánto iba a costar."},
        {n:"Héctor M.", t:"Pude agendar la consulta desde el celular y me atendieron por videollamada."},
        {n:"Gabriela S.", t:"Resolvieron mi testamento en una semana. Me dejaron tranquila."}
      ],
      faq:[
        {q:"¿Cuánto cuesta la primera consulta?", a:"Tiene un costo fijo y se descuenta si decides contratar el servicio."},
        {q:"¿Puedo consultar por videollamada?", a:"Sí. Escoges la modalidad al agendar y te enviamos el enlace."},
        {q:"¿Lo que cuento es confidencial?", a:"Sí. Todo lo que platicas con tu abogado está protegido por el secreto profesional."},
        {q:"¿Me dan el costo antes de empezar?", a:"Sí. Recibes por escrito el costo total y las etapas del trámite."}
      ],
      docs:{
        "Divorcio":["Acta de matrimonio","Actas de nacimiento de los hijos","Identificación oficial","Comprobante de domicilio","Datos de bienes y deudas"],
        "Testamento":["Identificación oficial","Acta de nacimiento","Escrituras de bienes","Datos de las personas que heredan"],
        "Arrendamiento":["Identificación de las partes","Escritura o comprobante del inmueble","Datos del fiador, si hay"],
        "Despido laboral":["Identificación oficial","Último recibo de pago","Contrato o carta de despido","Mensajes o pruebas del despido"]
      },
      agenda:{ modalidades:["En el despacho","Videollamada","Por teléfono"], campos:[{name:"asunto",label:"¿Sobre qué es tu consulta?",tipo:"select",opciones:["Familia","Testamento o herencia","Contrato o renta","Trabajo","Otro"]}] }
    }),
    esteticas: Object.assign({}, base, {
      giro:"Estética", titulo:"Estilista", duracion:60,
      horario:{1:[["10:00","19:00"]],2:[["10:00","19:00"]],3:[["10:00","19:00"]],4:[["10:00","19:00"]],5:[["10:00","20:00"]],6:[["09:00","18:00"]]},
      servicios:[
        {nombre:"Corte y peinado", detalle:"Corte a tu medida, lavado y secado.", duracion:"60 min", precio:300},
        {nombre:"Tinte y color", detalle:"Raíz, color completo o mechas, con diagnóstico previo.", duracion:"120 min", precio:900},
        {nombre:"Manicure en gel", detalle:"Con diseño sencillo y duración de hasta tres semanas.", duracion:"60 min", precio:280},
        {nombre:"Pedicure", detalle:"Spa de pies, corte, limado y esmaltado.", duracion:"60 min", precio:320},
        {nombre:"Limpieza facial", detalle:"Limpieza profunda, exfoliación y mascarilla.", duracion:"60 min", precio:450},
        {nombre:"Peinado para evento", detalle:"Peinado o maquillaje para boda, XV años o graduación.", duracion:"90 min", precio:600}
      ],
      pasos:[
        {t:"Eliges tus servicios", d:"Los combinas como quieras y ves cuánto tardan y cuánto cuestan."},
        {t:"Reservas tu horario", d:"Día y hora desde el celular, con recordatorio."},
        {t:"Llegas y te consentimos", d:"Tu cita ya está apartada. Solo llegas y disfrutas."}
      ],
      resenas:[
        {n:"Valeria O.", t:"Elegí mis servicios desde el celular y llegué directo a mi lugar. Sin esperas."},
        {n:"Paola D.", t:"Me hicieron el peinado para mi boda y todo salió como lo imaginé."},
        {n:"Ximena L.", t:"El color quedó natural, justo lo que pedí. Voy a volver."}
      ],
      faq:[
        {q:"¿Necesito cita?", a:"Sí, para asegurarte lugar y tiempo. Agendas en un minuto desde el celular."},
        {q:"¿Puedo combinar varios servicios?", a:"Sí. Elige los que quieras y te mostramos el total y la duración."},
        {q:"¿Hacen peinados para eventos?", a:"Sí. Agenda con anticipación, sobre todo en temporada de bodas y graduaciones."},
        {q:"¿Qué pasa si llego tarde?", a:"Avísanos por WhatsApp y acomodamos tu cita lo mejor posible."}
      ],
      agenda:{ modalidades:null, campos:[] }
    }),
    barberias: Object.assign({}, base, {
      giro:"Barbería", titulo:"Barbero", duracion:30,
      horario:{1:[["10:00","20:00"]],2:[["10:00","20:00"]],3:[["10:00","20:00"]],4:[["10:00","20:00"]],5:[["10:00","21:00"]],6:[["09:00","20:00"]],0:[["10:00","15:00"]]},
      servicios:[
        {nombre:"Corte clásico", detalle:"Tijera o máquina, con lavado y peinado.", duracion:"30 min", precio:150},
        {nombre:"Fade o degradado", detalle:"Degradado a tu estilo, con acabado a navaja.", duracion:"40 min", precio:180},
        {nombre:"Barba", detalle:"Perfilado y toalla caliente.", duracion:"30 min", precio:120},
        {nombre:"Corte y barba", detalle:"El combo completo con descuento.", duracion:"60 min", precio:250},
        {nombre:"Corte para niños", detalle:"Hasta 12 años, con paciencia.", duracion:"30 min", precio:120},
        {nombre:"Facial y cejas", detalle:"Limpieza rápida y perfilado de cejas.", duracion:"20 min", precio:100}
      ],
      pasos:[
        {t:"Arma tu visita", d:"Elige corte, barba o el combo y ve cuánto tarda."},
        {t:"Aparta tu lugar", d:"Escoge hora y barbero desde el celular. Se acabó la fila."},
        {t:"Llegas y te toca", d:"Tu horario es tuyo. Sales con el corte que querías."}
      ],
      resenas:[
        {n:"Diego A.", t:"Aparto mi hora desde el celular y llego directo a la silla. Cero fila."},
        {n:"Emilio R.", t:"El fade siempre queda parejo. Ya no cambio de barbería."},
        {n:"Sr. Gustavo P.", t:"Llevo a mi hijo y a mí en el mismo horario. Muy práctico."}
      ],
      faq:[
        {q:"¿Necesito cita?", a:"No es obligatoria, pero con cita no esperas. Agendas en menos de un minuto."},
        {q:"¿Puedo escoger barbero?", a:"Sí, al agendar eliges con quién quieres tu corte."},
        {q:"¿Cuánto tarda un corte con barba?", a:"Alrededor de una hora."},
        {q:"¿Aceptan tarjeta?", a:"Sí, efectivo, tarjeta y transferencia."}
      ],
      agenda:{ modalidades:null, campos:[{name:"barbero",label:"¿Con qué barbero?",tipo:"select",opciones:["El que esté libre","Barbero 1","Barbero 2"]}] }
    }),
    tatuajes: Object.assign({}, base, {
      giro:"Tatuajes", titulo:"Tatuador", duracion:60,
      horario:{2:[["12:00","20:00"]],3:[["12:00","20:00"]],4:[["12:00","20:00"]],5:[["12:00","21:00"]],6:[["11:00","20:00"]]},
      servicios:[
        {nombre:"Consulta y diseño", detalle:"Platicamos tu idea y te mostramos el boceto. El apartado se descuenta del tatuaje.", duracion:"45 min", precio:200},
        {nombre:"Tatuaje pequeño", detalle:"Hasta 8 cm. Letras, símbolos, línea fina.", duracion:"1 a 2 h", precio:900},
        {nombre:"Tatuaje mediano", detalle:"De 8 a 15 cm, con o sin sombra.", duracion:"2 a 4 h", precio:2200},
        {nombre:"Tatuaje grande", detalle:"Por sesión. Brazo, pierna, espalda.", duracion:"4 h", precio:4000},
        {nombre:"Cover up y retoque", detalle:"Valoración previa para saber qué se puede hacer.", duracion:"Por cita", precio:1500},
        {nombre:"Perforaciones", detalle:"Con material estéril y joyería de titanio.", duracion:"20 min", precio:350}
      ],
      pasos:[
        {t:"Cuéntanos tu idea", d:"Cotiza en línea y agenda tu consulta de diseño."},
        {t:"Aprobamos el diseño juntos", d:"Ves el boceto, lo ajustamos y confirmas tu sesión con un apartado."},
        {t:"Tu sesión", d:"Material nuevo y estéril, y todos los cuidados para que cicatrice bien."}
      ],
      resenas:[
        {n:"Andrés V.", t:"Me mandaron el boceto antes de la cita y salió justo como lo imaginaba."},
        {n:"Mónica C.", t:"Todo muy limpio y explicaron los cuidados paso a paso."},
        {n:"Iván T.", t:"Cotizar en línea me ahorró mucho tiempo. Llegué sabiendo cuánto iba a costar."}
      ],
      faq:[
        {q:"¿Cuánto cuesta mi tatuaje?", a:"Depende del tamaño, la zona y el estilo. Usa la cotización en línea y confirmamos en tu consulta."},
        {q:"¿Necesito dejar un apartado?", a:"Sí, y se descuenta del precio final."},
        {q:"¿Desde qué edad se puede?", a:"Atendemos a mayores de 18 años, con identificación."},
        {q:"¿Cómo cuido mi tatuaje?", a:"Te damos una guía por escrito y estamos disponibles por WhatsApp para dudas."}
      ],
      cotiza:{
        tamanos:[["Pequeño (hasta 8 cm)",900,1500],["Mediano (8 a 15 cm)",2000,3200],["Grande (más de 15 cm)",3800,6500]],
        zonas:[["Brazo o antebrazo",1],["Pierna",1],["Espalda u hombro",1.1],["Costillas o pecho",1.25],["Cuello o manos",1.3]],
        estilos:[["Línea fina",1],["Blackwork",1],["Realismo",1.35],["Tradicional",1.1],["Letras",0.9]]
      },
      estilos:[["Línea fina","Trazos delgados y detalle sutil"],["Blackwork","Negro sólido y alto contraste"],["Realismo","Sombras y volumen"],["Tradicional","Líneas gruesas y color"],["Letras","Frases y tipografía"],["Cover up","Renovar un tatuaje anterior"]],
      agenda:{ modalidades:null, campos:[
        {name:"idea",label:"Tamaño aproximado",tipo:"select",opciones:["Pequeño","Mediano","Grande","No sé aún"]},
        {name:"edad",label:"¿Eres mayor de 18 años?",tipo:"select",opciones:["Sí"]}
      ] }
    })
  };
})();
