const groupText = `
<div class="group-text">
    <h4>В группах с увеличением заряда ядра (сверху вниз)</h4>
    <ol>
        <li>радиус атомов увеличивается</li>
        <li>электроотрицательность уменьшается</li>
        <li>металлические свойства усиливаются</li>
        <li>неметаллические свойства ослабевают</li>
        <li>восстановительные свойства усиливаются</li>
        <li>окислительные свойства ослабевают</li>
    </ol>
</div>
`;

export default function Group({ num, fun }) {
    return(
        <div className="group">
            <span onMouseOver={(e) => fun(e, groupText)}>{ num }</span>
        </div>
        
    )
}