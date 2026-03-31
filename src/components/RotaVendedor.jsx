export default function RotaVendedor({ children }) {
    const [status, setStatus] = useState(null);

    useEffect(() => {
        async function verificar() {
            try {
                const response = await fetch("http://10.92.3.145:5000/verificar_login", {
                    credentials: "include"
                });

                if (!response.ok) {
                    setStatus(false);
                    return;
                }

                const data = await response.json();

                if (data.tipo === 1) {
                    setStatus(true);
                } else {
                    setStatus(false);
                }

            } catch {
                setStatus(false);
            }
        }

        verificar();
    }, []);

    if (status === null) return <p>Carregando...</p>;

    if (!status) return <Navigate to="/" />;

    return children;
}