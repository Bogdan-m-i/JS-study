<pre>
<?php print_r($_REQUEST); ?>
</pre>


<?php
$postData = file_get_contents('php://input');
$data = json_decode($postData, true);

echo $data['phone'];