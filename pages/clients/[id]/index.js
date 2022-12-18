import { useRouter } from "next/router";

export default function ClientProjectPage() {
    const router = useRouter();
    console.log(router.query);

    function loadProjectHandler() {
        //load data...
        router.push({
            pathname: '/clients/[id]/[clientprojectid]',
            query: {
                id: 'max', clientprojectid: 'projecta'
            }
        });
    }
    return (
        <div>
            <h1>
                The Projects of given client
            </h1>
            <button onClick={loadProjectHandler}>Load Project A</button>
        </div>
    )
}
