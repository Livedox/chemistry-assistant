const periodText = `
<div class="period-text">
    <h4>В периодах справа налево</h4>
    <ol>
        <li>металлические и восстановительные свойства ослабевают</li>
        <li>неметаллические и окислительные свойства усиливаются</li>
        <li>электроотрицательность увеличивается</li>
        <li>радиус атомов уменьшается</li>
    </ol>
</div>
`;

export default function Period({ num, fun }) {
    return(
        <div className="period">
            <span onMouseOver={(e) => fun(e, periodText)}>{ num }</span>
        </div>                     
    )
}