export const checkform = (value) => {
    const {linkWorkspace,imageProfile,workspaceName,peopleAmount,theme,status}=value;
    if(linkWorkspace==="" ||imageProfile===""||workspaceName===""||peopleAmount===""||theme===""||status==="")
    return false;
    return true;
}
