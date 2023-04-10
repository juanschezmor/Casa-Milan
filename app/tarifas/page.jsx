export default function TarifasPage() {
  return (
    <div
      id="tarifas"
      className="bg-secondary w-full h-screen  p-12 flex sm:flex-row flex-col justify-center  "
    >
      <table className=" w-3/4 font-bevietnam border">
        <colgroup>
          <col className="w-377" />
          <col className="w-395" />
        </colgroup>
        <thead>
          <tr>
            <th
              className="bg-gray-200 text-xxl text-center font-semibold py-2 border"
              colSpan={2}
            >
              Tarifas curso 2022/2023
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="bg-gray-100 py-2 px-4">
              Habitación individual P. Baja
            </td>
            <td className="py-2 px-4">410€</td>
          </tr>
          <tr>
            <td className="bg-gray-200 py-2 px-4">
              Habitación individual estándar
            </td>
            <td className="py-2 px-4">450€</td>
          </tr>
          <tr>
            <td className="bg-gray-100 py-2 px-4">Habitación doble P. Baja</td>
            <td className="py-2 px-4">300€</td>
          </tr>
          <tr>
            <td className="bg-gray-200 py-2 px-4">Habitación doble con baño</td>
            <td className="py-2 px-4">310€</td>
          </tr>
          <tr>
            <td className="bg-gray-100 py-2 px-4">
              Habitación individual con terraza
            </td>
            <td className="py-2 px-4">460€</td>
          </tr>
          <tr>
            <td className="bg-gray-200 py-2 px-4">
              Habitación doble uso individual con terraza
            </td>
            <td className="py-2 px-4">480€</td>
          </tr>
          <tr>
            <td className="bg-gray-100 py-2 px-4">
              Habitación doble con baño uso individual
            </td>
            <td className="py-2 px-4">500€</td>
          </tr>
        </tbody>
      </table>
      <div className=" flex flex-col mt-5 flex-wrap text-darker w-full sm:text-base text-sm   justify-center">
        <p className="font-medium">- Los precios son por persona y mes.</p>
        <p className="font-medium">- Las tarifas incluyen IVA.</p>
        <p className="font-medium">
          - La reserva de plaza se hará efectiva mediante transferencia bancaria
          por un importe de 200€ en concepto de matrícula.
        </p>
      </div>
    </div>
  );
}
