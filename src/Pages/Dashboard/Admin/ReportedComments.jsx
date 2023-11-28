import useComments from "../../../Api/useComments";


const ReportedComments = () => {
    const {comments} = useComments()
    return (
        <div>
            {
                comments.map(com => <p key={com._id} > {com.comment}</p>)
            }
        </div>
    );
};

export default ReportedComments;