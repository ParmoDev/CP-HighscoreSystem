public class Example : MonoBehaviour 
{
    string root = "https://highscore-system-cp.herokuapp.com/";
    string[] pages = {"/submit", "/scores", "/clearScores"};

    public start()
    {
        Debug.Log(getScores());
    }

    public void getScores()
    {
        UnityWebRequest req = UnityWebReqest.Get(root + pages[1]);
        return req.downloadHandler.text;
    }

    public void submit()
    {
        var req = new UnityWebRequest(root + pages[0], "POST");

        byte[] jsonData = new System.Text.UTF8Encoding().GetBytes("{'key': 'CodingPirates', 'username': 'user', 'score': '50'");
        req.uploadHandler = (uploadHandler)new uploadHandlerRaw(jsonData);
        req.downloadHandler = (DownloadHandler)new DownloadHandlerBuffer();

        yield return req.SendWebRequest();
    }
}