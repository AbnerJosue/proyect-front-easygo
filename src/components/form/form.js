import React from "react";
import { Formik, Form } from "formik";
import { Grid, Button, TextField, MenuItem } from "@mui/material"
import * as yup from "yup";
import moment from "moment"
import { connect } from "react-redux";
import * as actions from "../logic/action/request";
import * as selectors from "../logic/reducer";

const Forms = ({ fetchingData, isCompletedGet }) => {
    const sexoFM = [
        {
            id: "MASCULINO",
            name: "MASCULINO"
        },
        {
            id: "FEMENINO",
            name: "FEMENINO"
        }
    ]

    const schema = yup.object({
        carnet: yup.string().test(
            '',
            'El primer valor debe ser A o a',
            (val) => {
                let a = val.split('')
                if (a[0] === "a" || a[0] === "A")
                    return a[0]
            }
        ).test(
            '',
            'el tercer caracter no es cinco',
            (val) => {
                let a = val.split('');
                if (a[2] === "5")
                    return a[2]
            }
        ).test(
            '',
            'El ultimo digito debe ser 3 , 1 o 9 ',
            (val => {
                let a = val.split('');
                if (a[5] === "1" || a[5] === "3" || a[5] === "9")
                    return a[5];
            })
        ).required("Ingrese una descripción").min(6, 'El maximo debe ser de 6  caracterer').max(6, 'El maximo debe ser de 6 caracterer'),
        nombre: yup.string().required("Ingrese una descripción"),
        direccion: yup.string().required("Ingrese una descripción"),
        genero: yup.string().required("Ingrese una descripción"),
        telefono: yup.number().required("Ingrese una descripción"),
        fechaNacimiento: yup.string().test(
            "DOB",
            "Su edad debe ser a mayor a 17 años",
            value => {
                return moment().diff(moment(value), 'years') >= 18;
            }
        ),
        carrera: yup.string().required("Ingrese una descripción"),
        generoPoesia: yup.string().required("Ingrese una descripción"),
        fechaInscripcion: yup.string().required("Ingrese una descripción"),
    });
    return (
        <Formik
            initialValues={{
                carnet: undefined,
                nombre: undefined,
                direccion: undefined,
                genero: undefined,
                telefono: undefined,
                fechaNacimiento: undefined,
                carrera: undefined,
                generoPoesia:undefined,
                fechaInscripcion: new Date(),
            }}
            onSubmit={(values) => {
                fetchingData(values);
                console.info(values)
            }}
            validationSchema={schema}
        >
            {({
                handleSubmit,
                handleChange,
                handleBlur,
                errors,
                values,
                touched,
            }) => (
                <Form onSubmait={handleSubmit}>
                    <Grid
                        container
                        direction="row"
                        alignItems="center"
                    >
                        <Grid item md={12} >
                            <TextField
                                id={`TF-carnet}`}
                                type="text"
                                name="carnet"
                                fullWidth
                                label="Carnet"
                                variant="outlined"
                                value={values.carnet}
                                error={errors.carnet && touched.carnet}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                helperText={
                                    errors.carnet &&
                                    touched.carnet &&
                                    errors.carnet
                                }

                            />
                            <TextField
                                id={`TF-nombre}`}
                                type="text"
                                name="nombre"
                                fullWidth
                                label="Nombre"
                                variant="outlined"
                                value={values.nombre}
                                error={errors.nombre && touched.nombre}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                helperText={
                                    errors.nombre &&
                                    touched.nombre &&
                                    errors.nombre
                                }

                            />
                            <TextField
                                id={`TF-direccion}`}
                                type="text"
                                name="direccion"
                                fullWidth
                                label="direccion"
                                variant="outlined"
                                value={values.direccion}
                                error={errors.direccion && touched.direccion}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                helperText={
                                    errors.direccion &&
                                    touched.direccion &&
                                    errors.direccion
                                }

                            />
                            <TextField
                                id={`TF-telefono}`}
                                type="text"
                                name="telefono"
                                fullWidth
                                label="Telefono"
                                variant="outlined"
                                value={values.telefono}
                                error={errors.telefono && touched.telefono}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                helperText={
                                    errors.telefono &&
                                    touched.telefono &&
                                    errors.telefono
                                }

                            />
                            <TextField
                                id={`TF-fechaNacimiento}`}
                                type="date"
                                name="fechaNacimiento"
                                fullWidth
                                label="Fecha de Nacimiento"
                                variant="outlined"
                                value={values.fechaNacimiento}
                                error={errors.fechaNacimiento && touched.fechaNacimiento}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                helperText={
                                    errors.fechaNacimiento &&
                                    touched.fechaNacimiento &&
                                    errors.fechaNacimiento
                                }

                            />
                            <TextField
                                id={`TF-generoPoesia}`}
                                type="text"
                                name="generoPoesia"
                                fullWidth
                                label="Genero Poesía"
                                variant="outlined"
                                value={values.generoPoesia}
                                error={errors.generoPoesia && touched.generoPoesia}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                helperText={
                                    errors.generoPoesia &&
                                    touched.generoPoesia &&
                                    errors.generoPoesia
                                }

                            />
                            <TextField
                                id={`TF-carrera}`}
                                type="text"
                                name="carrera"
                                fullWidth
                                label="Carrera cursando"
                                variant="outlined"
                                value={values.carrera}
                                error={errors.carrera && touched.carrera}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                helperText={
                                    errors.carrera &&
                                    touched.carrera &&
                                    errors.carrera
                                }

                            />

                            <TextField
                                id={`TF-fechaInscripcion}`}
                                type="text"
                                name="fechaInscripcion"
                                fullWidth
                                label="Fecha Inscripcion"
                                disabled={true}
                                variant="outlined"
                                defaultValue={new Date()}
                                value={values.fechaInscripcion}
                                error={errors.fechaInscripcion && touched.fechaInscripcion}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                helperText={
                                    errors.fechaInscripcion &&
                                    touched.fechaInscripcion &&
                                    errors.fechaInscripcion
                                }

                            />
                            <TextField
                                id={`TF-genero}`}
                                type="text"
                                name="genero"
                                fullWidth
                                select
                                label="Genero"
                                variant="outlined"
                                value={values.nombre}
                                error={errors.nombre && touched.nombre}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                helperText={
                                    errors.nombre &&
                                    touched.nombre &&
                                    errors.nombre
                                }

                            >
                                {sexoFM.map((p) => (
                                    <MenuItem value={p.id}>
                                        {p.name}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid
                            container
                            direction="column"
                        >
                            <Grid item lg={12} md={12} xs={12}>
                                <Button
                                    type="submit"
                                    color="primary"
                                    variant="contained"
                                    fullWidth
                                >
                                    CREAR
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Form>
            )}
        </Formik>
    )
}

export default connect(
    (state) => ({
        isLoadingUpdate: selectors.createdIsStarted(state),
        isCompletedGet: selectors.createdIsData(state),
    }),
    (dispatch) => ({
        fetchingData(values) {
            dispatch(actions.startedCretedData(values));
        },
    })
)(Forms);; 