<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8"/>
    <title>Random Pictures</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/semantic-ui/2.2.7/semantic.min.css">
    <link rel="stylesheet" href="{{mix('/css/app.css')}}">
</head>
<body>

    <div class="ui centered grid">
        <div class="column">
            <div class="ui center aligned container">
                <h1>Random Pictures</h1>
                <h2>"Take your beautiful picture !"</h2>
                <img src="http://placehold.it/900x400"/>
                <div class="massive ui fluid teal button">Change the image</div>
                <div class="ui big fluid action input">
                    <input type="text" value="http://www.heroku.it/900x400"/>
                    <button class="ui massive yellow right labeled icon button">
                        <i class="copy icon"></i>
                        Copy
                    </button>
                </div>
                <div class="ui massive form">
                    <div class="two fields">
                        <div class="field">
                            <label for="width">Width</label>
                            <input id="width" type="text" name="width" value="900">
                        </div>
                        <div class="field">
                            <label for="height">Height</label>
                            <input id="height" type="text" name="height" value="400">
                        </div>
                    </div>
                    <div class="massive ui submit button">Resize</div>
                </div>
            </div>
        </div>
    </div>

    <script> window.Laravel = { csrfToken : "{{csrf_token()}}"}; </script>
    <script src="{{mix('/js/app.js')}}"></script>
</body>
</html>