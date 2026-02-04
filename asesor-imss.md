# Asesor de IA del IMSS

## Objetivo
Crear la IA del IMSS para facilitar la orientación a derechohabientes y personal del IMSS, ofreciendo respuestas confiables, actualizadas y seguras sobre trámites, citas, prestaciones y servicios.

## Alcance funcional
- **Información general**: servicios médicos, prestaciones económicas, afiliación y vigencia de derechos.
- **Trámites comunes**: alta/baja, correcciones de datos, solicitud de NSS, incapacidades y pensiones.
- **Citas y atención**: guía para uso de plataformas, requisitos y tiempos estimados.
- **Orientación preventiva**: campañas, vacunación, salud ocupacional y educación para la salud.

## Componentes clave de la solución
1. **Base de conocimiento IMSS**
   - Documentos oficiales (normativa, lineamientos, preguntas frecuentes, catálogos de servicios).
   - Actualización periódica mediante un pipeline de ingestión.
   - Metadatos por tema, vigencia, población objetivo y prioridad.

2. **Motor de recuperación (RAG)**
   - Indexación semántica con embeddings.
   - Recuperación híbrida (semántica + keywords) para precisión en normativas.
   - Filtros por vigencia y jurisdicción (UMF, delegación, estado).

3. **Capa conversacional**
   - Orquestación de prompts con guardrails.
   - Manejo de contexto y desambiguación de preguntas.
   - Respuestas con citas de fuentes oficiales.

4. **Seguridad y cumplimiento**
   - Cumplimiento de la LFPDPPP y políticas internas del IMSS.
   - Enmascaramiento de datos personales.
   - Auditoría de consultas y control de acceso.

## Cómo crear la IA del IMSS (plan ejecutable)
1. **Levantamiento de requisitos**
   - Definir casos de uso prioritarios (ej. alta/baja, citas, vigencia de derechos).
   - Identificar sistemas fuente y responsables de contenido oficial.
   - Determinar canales de despliegue (web, WhatsApp, IVR).

2. **Preparación de datos**
   - Consolidar documentos oficiales en un repositorio controlado.
   - Normalizar formatos (PDF, HTML, Word) a texto estructurado.
   - Etiquetar contenido por tema, vigencia y jurisdicción.

3. **Construcción del índice**
   - Generar embeddings y construir un índice semántico.
   - Configurar búsqueda híbrida (semántica + keywords).
   - Definir filtros por vigencia y ubicación.

4. **Diseño conversacional**
   - Crear plantillas de respuesta con pasos claros y requisitos.
   - Configurar desambiguación y validación de intención.
   - Incluir citas de fuentes oficiales en cada respuesta.

5. **Integración y pruebas**
   - Integrar el motor RAG con canales de atención.
   - Probar con casos reales y métricas de precisión.
   - Ajustar respuestas con retroalimentación de personal del IMSS.

6. **Despliegue y operación**
   - Implementar monitoreo de calidad y seguridad.
   - Definir un flujo de escalamiento a asesor humano.
   - Establecer un ciclo de actualización de contenido.

## Experiencia de usuario
- **Canales**: web, móvil, WhatsApp, IVR y kioscos en UMF.
- **Tono**: claro, respetuoso y orientado a pasos accionables.
- **Accesibilidad**: lenguaje sencillo, lectura fácil y soporte multilingüe.

## Flujo de interacción (alto nivel)
1. El usuario describe su necesidad.
2. El sistema valida intención y contexto (derechohabiente/patrón/personal).
3. Se recupera información relevante y vigente.
4. El asesor genera una respuesta con pasos y requisitos.
5. Se ofrecen enlaces o acciones directas (agendar cita, descargar formato, etc.).

## Métricas de éxito
- Precisión de respuesta y satisfacción del usuario.
- Tiempo promedio de resolución.
- Reducción de consultas presenciales y telefónicas.
- Tasa de escalamiento a agente humano.

## Roadmap sugerido
- **Fase 1 (Piloto)**: FAQs críticas y trámites de alta demanda.
- **Fase 2 (Escalamiento)**: integración con sistemas de citas y vigencia.
- **Fase 3 (Optimización)**: personalización por perfil y analítica avanzada.

## Consideraciones técnicas
- **Infraestructura**: nube híbrida o on-prem con soberanía de datos.
- **Observabilidad**: monitoreo de calidad, drift y sesgos.
- **Fallback**: transferencia a asesor humano cuando aplique.

## Entregables iniciales
- Documento de requerimientos.
- Arquitectura de referencia.
- Prototipo conversacional con dataset curado.
- Plan de seguridad y cumplimiento.
