<?php

class FileStorage implements Storage
{
  var $fileName;

  function __construct($fileName)
  {
    $this->fileName = $fileName;
  }

  function save($figures)
  {
    file_put_contents($this->fileName, $figures);
  }

  function load()
  {
    return file_get_contents($this->fileName);
  }
}
