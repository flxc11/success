<?php



$TEMPLATESDIR = array(
    'index' => '',
    'article' => 'article',
    'form' => 'form',
    'member' => 'member',
    'forum' => 'forum',
    'order' => 'member',
);

$TEMPNAMELIST = array(
    'typelist' => 'article_list',
    'typeread' => 'article_read',
    'typeindex' => 'article_index',
    'subjectlist' => 'subject_list',
    'subjectindex' => 'subject_index',
);

$SUBURLLIST = array(
    0 => array('id' => '{sid}_{pageid}', 'name' => 'dirname/1000'),
    1 => array('id' => '{sid}_list_{pageid}', 'name' => 'dirname/1000_list'),
    2 => array('id' => '{dirname}_list_{pageid}', 'name' => 'dirname/dirname_list'),
);

$TYPEURLLIST = array(
    0 => array('id' => '{tid}_{pageid}', 'name' => 'dirname/1000'),
    1 => array('id' => '{tid}_list_{pageid}', 'name' => 'dirname/1000_list'),
    2 => array('id' => '{dirname}_list_{pageid}', 'name' => 'dirname/dirname_list'),
);

$TYPEURLREAD = array(
    0 => array('id' => '{did}', 'name' => 'dirname/1'),
    1 => array('id' => '{datetime}{did}', 'name' => 'dirname/201101010101251'),
    2 => array('id' => '{data}/{did}', 'name' => 'dirname/20110101/1'),
    3 => array('id' => '{y}/{m}/{d}/{did}', 'name' => 'dirname/2011/01/01/1'),
    4 => array('id' => '{y}/{m}{d}/{did}', 'name' => 'dirname/2011/0101/1'),
);
?>
