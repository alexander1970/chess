<?php

class SessionStorage implements Storage
{
  var $name;

  function __construct($name)
  {
    $this->name = $name;
    session_start();
  }

  function save($figures)
  {
    $_SESSION[$this->name] = $figures;
  }

  function load()
  {
    return $_SESSION[$this->name];
  }
}
