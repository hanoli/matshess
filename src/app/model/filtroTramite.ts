export interface FiltroTramite{
	idEmpresa:number;
	idEstadoTramite:number;
	estadosTramites:string;
	idMercado:number;
	idTipoValor:string;
	DatefechaTramite:Date;
	numeroTramite:number;
	idModalidadTramite:number;
	idTramite:number;
	cveEmisora:string;
	razonSocial:string;
	tipoMercado:string;
	tipoValor:string;
	observaciones:string;
    idArea:number;
	porcMaxPrecioEjercicio:number;
	porcMaxPrima:number;
	porcMaxPrimaRetornable:number;
	porcMaxRendimientoLimitado:number;
    idGrupo:number;
	idTpEmpresa:string;
	porcMinPrecioEjercicio:number;
	porcMinPrima:number;
	porcMinPrimaRetornable:number;
	porcMinRendimientoLimitado:number;
	estatusDelete:boolean;
	idDatosOperativosTramite:number;
	reenviar:string;
	esEspecial:number;
	tipoOferta:string;
	orderBy:string;
	tipoOrderBy:string;
	chkRenmtoLimitado:boolean;
	chkDevPrimaRetornable:boolean;
	idUsuario:number;
}