export default function ContactoPage() {
  return (
    <div
      id="contacto"
      className=" bg-secondary px-20 sm:py-20 py-5 font-bevietnam "
    >
      <h1 className="text-4xl font-extrabold mb-2 text-center ">Contacto</h1>
      <form>
        <div class="mb-5 mt-12">
          <label
            for="name"
            class="mb-3 block text-base font-medium text-[#07074D]"
          >
            Nombre y Apellidos
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Nombre Completo"
            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>
        <div class="mb-5">
          <label
            for="email"
            class="mb-3 block text-base font-medium text-[#07074D]"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="example@domain.com"
            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>
        <div class="mb-5">
          <label
            for="subject"
            class="mb-3 block text-base font-medium text-[#07074D]"
          >
            Asunto
          </label>
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="Escriba el asunto"
            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>
        <div class="mb-5">
          <label
            for="message"
            class="mb-3 block text-base font-medium text-[#07074D]"
          >
            Escriba su mensaje:
          </label>
          <textarea
            rows="4"
            name="message"
            id="message"
            placeholder="Escriba el mensaje"
            class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          ></textarea>
        </div>
        <div className="flex justify-center">
          <button class=" hover:shadow-form rounded-md bg-blue-800 py-3 px-8 text-base font-semibold text-white outline-none">
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}
