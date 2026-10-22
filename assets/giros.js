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
    })
  };
})();
