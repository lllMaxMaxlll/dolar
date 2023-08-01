import axios from "axios";
import chalk from "chalk";

export const consultar = {
	async precio() {
		const url = "https://www.dolarsi.com/api/api.php?type=valoresprincipales";
		try {
			const respuesta = await axios.get(url);
			const datos = respuesta.data;

			let output = "";

			datos.forEach((dato) => {
				const { nombre, compra, venta } = dato.casa;
				const condicion = ["Blue", "turista", "Oficial"];

				condicion.some((cond) => {
					if (nombre.includes(cond)) {
						output += `\n${chalk.cyan.underline(nombre.toUpperCase())}\nCompra: ${chalk.red(compra)} | Venta: ${chalk.green(venta)}\n`;
					}
				});
			});

			console.log(output);
		} catch (error) {
			console.log(chalk.red("Error en la consulta"));
		}
	},
};
