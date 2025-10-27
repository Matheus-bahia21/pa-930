import '.styles.css';
import { use, useEffect } from 'react';
import { set } from 'react-hook-form';

function ListarUsuario() {
    const [ usuarios, setUsuarios] = react.useState([]);
    const [loagding, setLoading] = react.useState(true);

    useEffect(() => {
        async function fetchUsuarios() {
            try {
                const response = await api.get("/usuarios");
                setUsuarios(response.data);
            } catch (error) {
                console.error("Erro ao buscar usuários:", error);
            } finally {
                setLoading(false);
            }
        }
        fetchUsuarios();
    }, []);