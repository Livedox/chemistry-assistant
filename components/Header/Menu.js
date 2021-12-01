import React from "react";
import Link from "next/link";

export default function Menu({ active }) {
    return(
        <div id="menu" className={active ? "active" : ""}>
            <ol>
                <li><Link href="/"><a>Таблица Менделеева</a></Link></li>
                <li><Link href="/table-solubility"><a>Таблица растворимости</a></Link></li>
                <li><Link href="/canvas"><a>Редактор химических формул</a></Link></li>
            </ol>
        </div>    
    );
}
